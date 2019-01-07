import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import NavBar, { NavBarItem } from '../NavBar';

import SuiLogo from './suilogo';
import DropdownMenu, { DropdownMenuItem } from '../Common/DropdownMenu';
import { BreakMobile, BreakOverMobile } from '../Common/Breakpoint';
import MenuIcon from '../Icons/Menu';
import LanguageSelector, { Language } from '../Language';
import Utils from '../../Utils';
import translations from '../../Services/TranslationService';

import './header.scss';

const stopPropagation = e => e.stopPropagation();

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      currentLanguage: Utils.getCurrentLanguage(),
      languages: Utils.getSupportedLanguages(),
      showLanguageSelector: false,
    };
    this.menu = React.createRef();
    this.translation = translations();
  }

  handleClose = () => {
    document.removeEventListener('click', this.handleClose);
    this.menu.current.removeEventListener('click', stopPropagation);
    this.setState({
      showMenu: false,
    });
  };

  handleButtonClick = () => {
    document.addEventListener('click', this.handleClose);
    this.menu.current.addEventListener('click', stopPropagation);
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  openLanguageSelector = () => {
    this.setState({
      showLanguageSelector: true,
    });
  };

  handleLanguageClick = (event) => {
    const { currentTarget: { id } } = event;
    if (id !== this.state.currentLanguage) {
      this.props.onChangeLanguage(id);
    } else {
      this.setState({
        showLanguageSelector: false,
      });
    }
  };

  render() {
    const { isMobile } = this.props;
    const {
      showMenu, currentLanguage,
      languages, showLanguageSelector,
    } = this.state;
    const selectedLanguage = languages.filter(l => l.ISO2 === currentLanguage)[0];
    return (
      <div className="sui-page-header">
        <div className="sui-page-header__wrapper clearfix">
          <div className="sui-logo">
            <Link to={`/${currentLanguage}`} aria-label="home" >
              <SuiLogo width={isMobile ? '100px' : '142px'} />
            </Link>
          </div>
          <div className="sui-navbar-wrapper">
            <BreakOverMobile>
              <NavBar>
                <NavBarItem to={`/${currentLanguage}/design`} label={this.translation.sections_design} />
                <NavBarItem to={`/${currentLanguage}/software`} label={this.translation.sections_software} />
                <NavBarItem to={`/${currentLanguage}/about`} label={this.translation.sections_aboutUs} />
              </NavBar>
            </BreakOverMobile>
            <BreakMobile>
              <button
                className="sui-dropdown-menu__button"
                onClick={this.handleButtonClick}
                aria-label="menu"
              >
                <MenuIcon className="sui-dropdown-menu__icon" />
              </button>
            </BreakMobile>
          </div>
          <Language
            {...selectedLanguage}
            onClick={this.openLanguageSelector}
            className="sui-language-open-selector"
          />
          <LanguageSelector
            languages={languages}
            selected={selectedLanguage.ISO2}
            onClick={this.handleLanguageClick}
            className="sui-language-selector-menu"
            style={{
              visibility: showLanguageSelector ? 'visible' : 'hidden',
            }}
          />
        </div>
        <BreakMobile>
          <DropdownMenu showMenu={showMenu} ref={this.menu}>
            <DropdownMenuItem to={`/${currentLanguage}/design`} label={this.translation.sections_design} />
            <DropdownMenuItem to={`/${currentLanguage}/software`} label={this.translation.sections_software} />
            <DropdownMenuItem to={`/${currentLanguage}/about`} label={this.translation.sections_aboutUs} />
          </DropdownMenu>
        </BreakMobile>
      </div>
    );
  }
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
};

export default Header;
