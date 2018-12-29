import React from 'react';
import PropTypes from 'prop-types';

import { SuiHeroImage, SuiImage, SuiParagraph, SuiTag, SuiTitle } from '../../../ComponentsLib';

const componentTypes = [SuiHeroImage, SuiImage, SuiParagraph, SuiTag, SuiTitle];

const FieldFactory = ({ id, props }) => {
  const Component = componentTypes.find(c => id === c.id);
  const jsonProps = JSON.parse(props);
  console.log(jsonProps);
  return <Component {...jsonProps} />;
};

FieldFactory.propTypes = {
  id: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
};

export default FieldFactory;
