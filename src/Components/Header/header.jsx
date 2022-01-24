import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import withEye from '../../Views/HoC/withEyes';

import SuiLogo from './suilogo';

import './header.scss';

const Header = ({ isMobile, eye }) => (
  <div className="sui-page-header">
    <div className="sui-page-header__wrapper clearfix">
      <div className="sui-logo">
        <Link
          to="/"
          onClick={eye.seeClick('Navigation', 'click', 'logo')}
          aria-label="home"
        >
          <SuiLogo width={isMobile ? '100px' : '142px'} />
        </Link>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  eye: PropTypes.shape({
    seeClick: PropTypes.func,
  }).isRequired,
};

export default withEye(Header);
