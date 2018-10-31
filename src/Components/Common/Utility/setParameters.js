import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class SetParameters extends React.Component {
  constructor(props) {
    super(props);

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
    window.suilabs = {
      queryParams: params,
      featureFlags: currentFeatureFlags,
    };
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
};

export default withRouter(SetParameters);
