import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from './navBar';

import SuiLogo from './suilogo';

import './header.css';

const Header = () => (
  <div className="sui-page-header">
    <div className="sui-page-header__wrapper clearfix">
      <div className="sui-logo">
        <Link to="/">
          <SuiLogo width="142px" />
        </Link>
      </div>
      <div className="sui-navbar-wrapper">
        <NavBar />
      </div>
    </div>
  </div>
);

export default Header;
