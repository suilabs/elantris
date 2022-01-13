import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import RelativeLink from '../Common/Link/RelativeLink';

import './CoverImage.scss';

const CoverImage = ({ src, href, onClick, className }) => {
  console.log('COVER');
  const [isLoading, setIsLoading] = useState(true);
  const [stateSrc, setSrc] = useState(src);
  console.log(stateSrc);

  const classNames = [className, 'sui-cover-image'];

  const onLoad = () => {
    console.log('onLoad');
    setIsLoading(false);
  };

  const onError = () => {
    console.log('onError');
    setIsLoading(false);
    setSrc(
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Http-News-Html-Error-404-Was-Not-Found-Page-1349562.png',
    );
  };

  useEffect(() => {
    console.log('useEffect');
    const img = new Image();
    img.src = stateSrc;
    img.onload = onLoad;
    img.onerror = onError;
  }, [stateSrc]);

  if (isLoading) {
    console.log('isLoading');
    return '';
  }

  return (
    <RelativeLink
      to={href}
      onClick={onClick(href)}
      className="sui-cover-image-link"
    >
      <div
        className={classNames.join(' ')}
        style={{ backgroundImage: `url(${stateSrc})` }}
      />
    </RelativeLink>
  );
};

CoverImage.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

CoverImage.defaultProps = {
  className: '',
  href: null,
  onClick: () => {},
};

export default CoverImage;
