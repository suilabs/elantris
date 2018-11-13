import React from 'react';
import PropTypes from 'prop-types';

import './navBar.scss';

const NavBar = ({ children = [] }) => (
  <nav className="sui-navbar">
    <ul>
      {children}
    </ul>
  </nav>
);

NavBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};


export default NavBar;
