import PropTypes from 'prop-types';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import withEye from '../../Views/HoC/withEyes';

import './NavBarItem.scss';

const NavBarItem = (props) => {
  const {
    to, label, className, history, eye,
  } = props;
  const root = history.location.pathname.split('/')[1];
  const active = `/${root}` === to ? '--active' : '';
  const classname = `sui-navbar__item${active} ${className}`;
  const onClickTrack = () => {
    eye.seeClick('navbar', label);
  };
  return (
    <li className={classname}>
      <Link to={to} onClick={onClickTrack} className="sui-navbar__item--link">
        {label}
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
  eye: PropTypes.shape({
    seeClick: PropTypes.func,
  }).isRequired,
};

NavBarItem.defaultProps = {
  className: 'menu-item',
};

export default withEye(withRouter(NavBarItem));
