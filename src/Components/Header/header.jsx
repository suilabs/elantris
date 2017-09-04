import React from 'react';

import NavBar from './navBar';

import SuiLogo from './suilogo';

import './header.css';

const Header = () => (
  <div className="sui-page-header">
    <div className="sui-logo">
      <SuiLogo width="100px" />
    </div>
    <NavBar />
  </div>
);

export default Header;
