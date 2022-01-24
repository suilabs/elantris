import React from 'react';
import PropTypes from 'prop-types';

import FlexBoxV from '../Common/FlexBoxes/VFlexBox';

import './ProjectWrapper.scss';

const ProjectWrapper = (props) => (
  <FlexBoxV>
    <div className="sui-project-detail--wrapper">
      {props.children.length ? props.children : [props.children]}
    </div>
  </FlexBoxV>
);

ProjectWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ProjectWrapper;
