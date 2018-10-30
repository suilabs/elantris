import React from 'react';
import PropTypes from 'prop-types';

import ProjectWrapper from '../../Components/ProjectWrapper/ProjectWrapper';
import FieldFactory from '../Common/Fields/FieldFactory';

const LayoutBuilder = ({ item: { name, type, template, configuration } }) => (
  <ProjectWrapper>
    <div className="sui-project-detail--title">
      <h1>{ name }</h1>
      <span>{type.name}</span>
    </div>
    {template.rows.map(row => row.map(col => (
      <FieldFactory
        type={col.type}
        value={
          configuration.find(
            conf => conf.component.id === col.id,
          ).value
        }
      />
    )))}
  </ProjectWrapper>
);

LayoutBuilder.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
    template: PropTypes.shape({
      rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
      }))).isRequired,
    }).isRequired,
    configuration: PropTypes.arrayOf(PropTypes.shape({
      component: PropTypes.shape({ id: PropTypes.string.isRequired }),
      value: PropTypes.string,
    })).isRequired,
  }).isRequired,
};

export default LayoutBuilder;
