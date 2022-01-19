import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Config from './config.json';

import './Image.css';

const checkImage = async (url) => {
  if (!url) return false;
  try {
    const res = await fetch(url);
    return res && res.ok;
  } catch (e) {
    return false;
  }
};

const Image = (props) => {
  const [image, setImage] = useState(
    props.image.thumbnailUrl || props.image.url,
  );

  useEffect(
    () =>
      checkImage(props.image.smallUrl).then((result) => {
        if (result) {
          setImage(props.image.smallUrl);
        }
      }),
    [props.image.smallUrl],
  );

  return (
    <div
      className="sui-component-image__wrapper"
      style={{
        width: `${props.width}%`,
      }}
    >
      <img src={image} alt={props.alt} />
    </div>
  );
};

Image.id = Config.id;
Image.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    smallUrl: PropTypes.string,
  }).isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number,
};

Image.defaultProps = {
  // eslint-disable-next-line backpack/use-tokens
  width: 100,
};

export default Image;
