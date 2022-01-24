import React from 'react';
import PropTypes from 'prop-types';

import './BreakMobile.scss';

const BreakMobile = ({ children }) => (
  <div className="show-on-mobile">{children}</div>
);

BreakMobile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default BreakMobile;
