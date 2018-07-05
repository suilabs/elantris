import React from 'react';
import PropTypes from 'prop-types';

import './DropdownMenu.css';

const DropDownMenu = ({ showMenu, children }) => {
  const className = `sui-dropdown-menu ${(showMenu && 'sui-dropdown-menu--show') || ''}`;

  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
};

DropDownMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  showMenu: PropTypes.bool,
};

DropDownMenu.defaultProps = {
  showMenu: false,
};

export default DropDownMenu;
