import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'proptypes';

import './navBar.css';

const NavBarItem = (props) => {
  const root = props.history.location.pathname.split('/')[1];
  const active = `/${root}` === props.to ? '--active' : '';
  const classname = `sui-navbar__item${active} menu-item`;
  return (
    <li className={classname}>
      <Link id={props.to} to={props.to} className="sui-navbar__item--link">
        {props.label}
      </Link>
    </li>
  );
};

NavBarItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const NavBarItemWR = withRouter(NavBarItem);

export const NavBarSpacer = () => (
  <li className="sui-navbar__item-spacer">
    ·
  </li>
);

const NavBar = () => (
  <nav className="sui-navbar">
    <ul>
      <NavBarItemWR to="/design" label="Design" />
      <NavBarItemWR to="/software" label="Software" />
      <NavBarItemWR to="/about" label="About us" />
    </ul>
  </nav>
);

export default NavBar;
