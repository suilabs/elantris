import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './NavBarItem.scss';

const NavBarItem = (props) => {
  const root = props.history.location.pathname.split('/')[1];
  const active = `/${root}` === props.to ? '--active' : '';
  const classname = `sui-navbar__item${active} ${props.className}`;
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
  className: PropTypes.string,
};

NavBarItem.defaultProps = {
  className: 'menu-item',
};

export default withRouter(NavBarItem);
