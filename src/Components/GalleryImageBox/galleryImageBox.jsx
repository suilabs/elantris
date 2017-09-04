import React from 'react';
import PropTypes from 'proptypes';

import './galleryImageBox.css';

const GalleryImageBox = (props) => (
  <div className="sui-image-box">
    <img src={props.img} className="sui-image-box__image" />
    <div className={`sui-image-box__label--${props.orientation}`}>
      {props.text}
    </div>
  </div>
);

GalleryImageBox.propTypes = {
  img: PropTypes.any.isRequired,
  text: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

GalleryImageBox.defaultProps = {
  orientation: 'horizontal',
  text: '',
};

export default GalleryImageBox;
