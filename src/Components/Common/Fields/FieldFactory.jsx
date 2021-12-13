import React from 'react';
import PropTypes from 'prop-types';

import {
  SuiHeroImage,
  SuiImage,
  SuiParagraph,
  SuiTag,
  SuiTitle,
  StickyText,
} from '../../../ComponentsLib';

const componentTypes = [
  SuiHeroImage,
  SuiImage,
  SuiParagraph,
  SuiTag,
  SuiTitle,
  StickyText,
];

const FieldFactory = ({ id, props, buildImageUrl }) => {
  const Component = componentTypes.find((c) => id === c.id);
  const jsonProps = JSON.parse(props);
  if (Component.id === 'image') {
    jsonProps.image.url = buildImageUrl(jsonProps.image.filename);
  }
  return <Component {...jsonProps} />;
};

FieldFactory.propTypes = {
  id: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
  buildImageUrl: PropTypes.func.isRequired,
};

export default FieldFactory;
