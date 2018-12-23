import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const mergeWithCookie = (cookieService, featureFlags) => {
  const featureFlagsCookie = cookieService.getJSONCookie('featureFlags');
  const finalFlags = { ...featureFlagsCookie, ...featureFlags };
  cookieService.putSessionJSONCookie('featureFlags', finalFlags);
  return finalFlags;
};

class SetParameters extends React.Component {
  constructor(props) {
    super(props);
    if (!props.ssr) {
      const params = new URLSearchParams(props.location.search.substring(1));
      let currentFeatureFlags;
      if (params.has('featureFlags')) {
        currentFeatureFlags = params.get('featureFlags').split('&').reduce((ret, actual) => {
          const [key, value] = actual.split(':');
          return {
            ...ret,
            [key]: value,
          };
        }, {});
        params.delete('featureFlags');
      }
      currentFeatureFlags = mergeWithCookie(props.cookieService, currentFeatureFlags);
      window.suilabs = {
        queryParams: params,
        featureFlags: currentFeatureFlags,
        ssr: false,
      };
    }
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

SetParameters.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  ssr: PropTypes.bool.isRequired,
  cookieService: PropTypes.shape({
    getJSONCookie: PropTypes.func,
    putSessionJSONCookie: PropTypes.func,
  }).isRequired,
};

export default withRouter(SetParameters);
