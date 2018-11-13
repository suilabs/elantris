import React from 'react';
import PropTypes from 'prop-types';

import './BreakOverMobile.scss';

const BreakOverMobile = ({ children }) => (
  <div className="show-over-mobile">
    {children}
  </div>
);

BreakOverMobile.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default BreakOverMobile;
