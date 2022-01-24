import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import LoadingImage from './LoadingImage';
import Config from './config.json';

import './Image.css';

const loadImage = (imageUrl) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = resolve;
    img.onerror = reject;
  });

const SIZES = {
  THUMB: 0,
  SMALL: 1,
  ORIGINAL: 2,
};

const ImageComponent = ({ image, width, alt }) => {
  const [loading, setLoading] = useState(true);
  const [imageReady, setImageReady] = useState(null);

  useEffect(() => {
    const imageLoadRace = (imageUrl, size) => (result) => {
      if (result && (!imageReady || imageReady.size < size)) {
        console.log('YA', size);
        setImageReady({ url: imageUrl, size });
        setLoading(false);
      }
    };
    loadImage(image.url).then(imageLoadRace(image.url, SIZES.ORIGINAL));
    loadImage(image.smallUrl).then(imageLoadRace(image.url, SIZES.SMALL));
  }, [image.smallUrl, image.url, imageReady]);

  return (
    <div
      className="sui-component-image__wrapper"
      style={{
        width: `${width}%`,
      }}
    >
      <LoadingImage loading={loading} />
      {imageReady && imageReady.url ? (
        <img src={imageReady.url} alt={alt} />
      ) : (
        ''
      )}
    </div>
  );
};

ImageComponent.id = Config.id;
ImageComponent.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    smallUrl: PropTypes.string,
  }).isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
};

ImageComponent.defaultProps = {
  // eslint-disable-next-line backpack/use-tokens
  width: 100,
};

export default ImageComponent;
