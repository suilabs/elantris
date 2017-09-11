import React from 'react';
import PropTypes from 'proptypes';

import './galleryImageBox.css';

const GalleryImageBox = (props) => {
  const imageClassName = [props.imageClassName, 'sui-image-box__image'];
  const labelClassName = [props.textClassName.split(' '),
                          `sui-image-box__label--${props.animationDirection}`];
  if (props.orientation == 'vertical') {
    labelClassName.push('sui-image-box__label--rotate-270');
  }
  return (
    <div className="sui-image-box">
      <a href={props.href}>
        <img 
          src={props.img} 
          className={imageClassName.join(' ')} 
        />
        { props.title && 
          <div 
            className={labelClassName.join(' ')}
          >
          <div className={`sui-image-box__label__text`}>
            <h4>{props.title}</h4>
            <p>{props.descr}</p>
          </div>
        </div> }
      </a>
    </div>
  )
};

GalleryImageBox.propTypes = {
  img: PropTypes.any.isRequired,
  title: PropTypes.string,
  descr: PropTypes.string,
  imageClassName: PropTypes.string,
  textClassName: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  animationDirection: PropTypes.oneOf(['horizontal', 'vertical'],)
};

GalleryImageBox.defaultProps = {
  orientation: 'horizontal',
  animationDirection: 'horizontal',
  title: null,
  descr: '',
  imageClassName: '',
  textClassName: '',
};

export default GalleryImageBox;
