import React from 'react';
import PropTypes from 'prop-types';

import './DropdownMenu.scss';

const DropDownMenu = React.forwardRef(({ showMenu, children }, ref) => {
  const className = `sui-dropdown-menu ${(showMenu && 'sui-dropdown-menu--show') || ''}`;

  return (
    <div
      className={className}
      ref={ref}
    >
      {children}
    </div>
  );
});

DropDownMenu.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  showMenu: PropTypes.bool,
};

DropDownMenu.defaultProps = {
  showMenu: false,
};

export default DropDownMenu;
