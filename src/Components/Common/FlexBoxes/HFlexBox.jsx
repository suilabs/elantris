import React from 'react';
import PropTypes from 'prop-types';

import './HFlexBox.css';

const HFlexBox = props => (
  <div className={`sui-horizontal-flexbox ${props.className}`}>
    {props.children}
  </div>
);

HFlexBox.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  className: PropTypes.string,
};

HFlexBox.defaultProps = {
  className: '',
};

export default HFlexBox;
