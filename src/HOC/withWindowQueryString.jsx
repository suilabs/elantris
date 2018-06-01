import React from 'react';
import PropTypes from 'proptypes';

const withWindowQueryString = (Component) => {
  const ComponentWithWindowQueryString = (props) => {
    window.suilabs = {
      queryParams: new URLSearchParams(props.location.search.substring(1)),
    };
    return <Component {...props} />;
  };

  ComponentWithWindowQueryString.propTypes = {
    location: PropTypes.shape({
      search: PropTypes.shape({
        substring: PropTypes.func.isRequired,
      }).isRequired,
    }).isRequired,
  };

  return ComponentWithWindowQueryString;
};

export default withWindowQueryString;
