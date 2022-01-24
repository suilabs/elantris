import React from 'react';
import PropTypes from 'prop-types';

const ImageArray = ({ className, content }) => (
  <div className={`sui-project__image-strip ${className}`}>
    {content.split(';').map((image) => (
      <img key={image} src={image} alt="wip" />
    ))}
  </div>
);

ImageArray.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string.isRequired,
};

ImageArray.defaultProps = {
  className: '',
};

export default ImageArray;
