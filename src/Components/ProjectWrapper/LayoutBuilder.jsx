import React from 'react';
import PropTypes from 'prop-types';

import ProjectWrapper from '../../Components/ProjectWrapper/ProjectWrapper';
import FieldFactory from '../Common/Fields/FieldFactory';
import Utils from '../../Utils';

const LayoutBuilder = ({
  item: {
    configuration,
  },
}) => (
  <ProjectWrapper>
    {configuration.map(config => (
      <FieldFactory
        id={config.componentId}
        props={config.propsJson}
        buildImageUrl={Utils.getAWSProjectImagePath}
      />
    ))}
  </ProjectWrapper>
);

LayoutBuilder.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
    configuration: PropTypes.arrayOf(PropTypes.shape({
      componentId: PropTypes.string.isRequired,
      propsJson: PropTypes.string,
    })).isRequired,
  }).isRequired,
};

export default LayoutBuilder;
