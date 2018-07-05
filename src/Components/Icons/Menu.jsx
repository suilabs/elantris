import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ className }) => (
  <svg className={className} width="62.1" height="62.1" enableBackground="new 0 0 129 129" version="1.1" viewBox="0 0 62.099998 62.099998">
    <g transform="translate(-33.5,-33.5)">
      <path d="m91.4 33.5h-53.8c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h53.9c2.3 0 4.1-1.8 4.1-4.1-0.1-2.3-1.9-4.1-4.2-4.1z" />
      <path d="m91.4 87.4h-53.8c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h53.9c2.3 0 4.1-1.8 4.1-4.1-0.1-2.3-1.9-4.1-4.2-4.1z" />
      <path d="m91.4 60.4h-53.8c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h53.9c2.3 0 4.1-1.8 4.1-4.1-0.1-2.3-1.9-4.1-4.2-4.1z" />
    </g>
  </svg>
);

Menu.propTypes = {
  className: PropTypes.string,
};

Menu.defaultProps = {
  className: '',
};

export default Menu;
