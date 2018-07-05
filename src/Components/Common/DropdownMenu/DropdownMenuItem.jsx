import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './DropdownMenuItem.css';

const DropdownMenuItem = (props) => {
  const root = props.history.location.pathname.split('/')[1];
  const active = `/${root}` === props.to ? '--active' : '';
  const classname = `sui-dropdown-menu__item${active} ${props.className}`;
  return (
    <li className={classname}>
      <Link id={props.to} to={props.to} className="sui-dropdown-menu__item--link">
        {props.label}
      </Link>
    </li>
  );
};


DropdownMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  className: PropTypes.string,
};

DropdownMenuItem.defaultProps = {
  className: '',
};

export default withRouter(DropdownMenuItem);
