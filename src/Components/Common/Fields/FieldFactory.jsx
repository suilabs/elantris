import React from 'react';
import PropTypes from 'prop-types';

import Text from './Text';
import ImageArray from './ImageArray';

export const FIELD_TYPES = {
  TEXT: 'TEXT',
  ARRAY_IMAGE: 'ARRAY_IMAGE',
};

const FIELDS = {
  TEXT: Text,
  ARRAY_IMAGE: ImageArray,
};

const FieldFactory = ({ type, value }) => {
  const Component = FIELDS[type];
  return <Component content={value} />;
};

FieldFactory.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)).isRequired,
  value: PropTypes.string.isRequired,
};

export default FieldFactory;
