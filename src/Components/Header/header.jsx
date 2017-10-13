import React from 'react';
import {Link} from 'react-router-dom';

import NavBar from './navBar';

import SuiLogo from './suilogo';

import './header.css';

const Header = () => (
  <div className="sui-page-header">
    <div className="sui-logo">
      <Link to="/">
        <SuiLogo width="100px" />
      </Link>
    </div>
    <NavBar />
  </div>
);

export default Header;
