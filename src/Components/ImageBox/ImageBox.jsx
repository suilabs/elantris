import React from 'react';
import PropTypes from 'proptypes';
import RelativeLink from '../Common/Link/RelativeLink';

import './ImageBox.css';

const ImageBox = (props) => {
  const imageClassName = [props.imageClassName, 'sui-image-box__image'];
  const labelClassName = [props.textClassName.split(' '), `sui-image-box__label--${props.animationDirection}`];
  const className = [props.className, 'sui-image-box'];
  if (props.orientation === 'vertical') {
    labelClassName.push('sui-image-box__label--rotate-270');
  }
  return (
    <div className={className.join(' ')}>
      <RelativeLink to={props.href}>
        <img
          src={props.img}
          className={imageClassName.join(' ')}
          alt={props.title}
        />
        { props.title &&
          <div
            className={labelClassName.join(' ')}
          >
            <div className="sui-image-box__label__text">
              <h4>{props.title}</h4>
              <p>{props.descr}</p>
            </div>
          </div>
        }
      </RelativeLink>
    </div>
  );
};

ImageBox.propTypes = {
  img: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  href: PropTypes.string,
  title: PropTypes.string,
  descr: PropTypes.string,
  imageClassName: PropTypes.string,
  textClassName: PropTypes.string,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  animationDirection: PropTypes.oneOf(['horizontal', 'vertical']),
};

ImageBox.defaultProps = {
  orientation: 'horizontal',
  animationDirection: 'horizontal',
  title: null,
  descr: '',
  imageClassName: '',
  textClassName: '',
  className: '',
  href: '',
};

export default ImageBox;
