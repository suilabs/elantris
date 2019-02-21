import React from 'react';
import PropTypes from 'prop-types';
import RelativeLink from '../Common/Link/RelativeLink';
import ImageWithFallback from '../Common/ImageWithFallback';

import './ImageBox.scss';

const ImageBox = (props) => {
  const imageClassName = [props.imageClassName, 'sui-image-box__image'];
  const labelClassName = [props.textClassName.split(' '), `sui-image-box__label--${props.animationDirection}`];
  const className = [props.className, 'sui-image-box'];
  if (props.orientation === 'vertical') {
    labelClassName.push('sui-image-box__label--rotate-270');
  }
  const onClick = href => (event) => {
    props.onClick(event, href);
  };
  return (
    <div className={className.join(' ')}>
      <RelativeLink to={props.href} onClick={onClick(props.href)} >
        <ImageWithFallback
          src={props.img}
          className={imageClassName.join(' ')}
          alt={props.title}
        />
        { props.title &&
          <div
            className={labelClassName.join(' ')}
          >
            <div className="sui-image-box__label-text">
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
  onClick: PropTypes.func,
};

ImageBox.defaultProps = {
  orientation: 'horizontal',
  animationDirection: 'horizontal',
  title: null,
  descr: '',
  imageClassName: '',
  textClassName: '',
  className: '',
  href: null,
  onClick: () => {},
};

export default ImageBox;
