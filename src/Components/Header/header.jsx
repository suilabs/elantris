import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar, { NavBarItem } from '../NavBar';

import SuiLogo from './suilogo';
import DropdownMenu, { DropdownMenuItem } from '../Common/DropdownMenu';
import { BreakMobile, BreakOverMobile } from '../Common/Breakpoint';
import MenuIcon from '../Icons/Menu';

import './header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  handleButtonClick = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  render() {
    const { isMobile } = this.props;
    const { showMenu } = this.state;
    return (
      <div className="sui-page-header">
        <div className="sui-page-header__wrapper clearfix">
          <div className="sui-logo">
            <Link to="/">
              <SuiLogo width={isMobile ? '100px' : '142px'} />
            </Link>
          </div>
          <div className="sui-navbar-wrapper">
            <BreakOverMobile>
              <NavBar>
                <NavBarItem to="/design" label="Design" />
                <NavBarItem to="/software" label="Software" />
                <NavBarItem to="/about" label="About us" />
              </NavBar>
            </BreakOverMobile>
            <BreakMobile>
              <button
                className="sui-dropdown-menu__button"
                onClick={this.handleButtonClick}
              >
                <MenuIcon className="sui-dropdown-menu__icon" />
              </button>
            </BreakMobile>
          </div>
        </div>
        <BreakMobile>
          <DropdownMenu showMenu={showMenu}>
            <DropdownMenuItem to="/design" label="Design" />
            <DropdownMenuItem to="/software" label="Software" />
            <DropdownMenuItem to="/about" label="About us" />
          </DropdownMenu>
        </BreakMobile>
      </div>
    );
  }
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Header;
