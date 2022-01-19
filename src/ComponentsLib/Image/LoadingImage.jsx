import React from 'react';
import PropTypes from 'prop-types';

import './LoadingImage.scss';

const LoadingImage = ({ loading }) => {
  const classes = ['load-wrapper'];
  if (!loading) {
    console.log(loading, 'HIDING');
    classes.push('hiding');
  }
  return (
    <div className={classes.join(' ')}>
      <div className="dummy" />
      <div className="activity" />
    </div>
  );
};

LoadingImage.propTypes = {
  loading: PropTypes.bool,
};

LoadingImage.defaultProps = {
  loading: false,
};

export default LoadingImage;
