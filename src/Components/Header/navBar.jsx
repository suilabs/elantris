import React from 'react';
import PropTypes from 'proptypes';
import { Link } from 'react-router-dom';

import './navBar.css';

export const NavBarItem = props => (
  <li className="sui-navbar__item">
    <Link to={props.to} className="sui-navbar__item__link">
      {props.label}
    </Link>
  </li>
);

NavBarItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export const NavBarSpacer = () => (
  <li className="sui-navbar__item-spacer">
    ·
  </li>
);

const NavBar = () => (
  <nav className="sui-navbar">
    <ul>
      <NavBarItem to="/design" label="Design" />
      <NavBarSpacer />
      <NavBarItem to="/software" label="Software" />
      <NavBarSpacer />
      <NavBarItem to="/about" label="About us" />
      <NavBarSpacer />
      <NavBarItem to="/contact" label="Contact" />
    </ul>
  </nav>
);

export default NavBar;
