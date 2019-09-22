import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withEye from '../../Views/HoC/withEyes';

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
    const { showMenu } = this.state;
    document.addEventListener('click', this.handleClose);
    this.menu.current.addEventListener('click', stopPropagation);
    this.props.eye.seeClick('Mobile menu', showMenu ? 'Close' : 'Open', `${Date.now()}`);
    this.setState({
      showMenu: !showMenu,
    });
  };

  openLanguageSelector = () => {
    this.props.eye.seeClick('Language Selector', 'Open', this.state.currentLanguage);
    this.setState({
      showLanguageSelector: true,
    });
  };

  handleLanguageClick = (event) => {
    const { currentTarget: { id } } = event;
    if (id !== this.state.currentLanguage) {
      this.props.eye.seeClick('Language', 'Selected', id);
      this.props.onChangeLanguage(id);
    } else {
      this.props.eye.seeClick('Language Selector', 'Close', this.state.currentLanguage);
      this.setState({
        showLanguageSelector: false,
      });
    }
  };

  trackLogoClick = () => {
    this.props.eye.seeClick('Navigation', 'click', 'logo');
  };

  render() {
    const { isMobile, sectionSeparationChar } = this.props;
    const {
      showMenu, currentLanguage,
      languages, showLanguageSelector,
    } = this.state;
    const selectedLanguage = languages.filter(l => l.ISO2 === currentLanguage)[0];
    const isSinglePage = Utils.getFeatureFlag('isSinglePage', true);
    return (
      <div className="sui-page-header">
        <div className="sui-page-header__wrapper clearfix">
          <div className="sui-logo">
            <Link to={`/${currentLanguage}`} onClick={this.trackLogoClick} aria-label="home">
              <SuiLogo width={isMobile ? '100px' : '142px'} />
            </Link>
          </div>
          <div className="sui-navbar-wrapper">
            <BreakOverMobile>
              <NavBar>
                <NavBarItem
                  to={`/${currentLanguage}${sectionSeparationChar}design`}
                  label={this.translation.sections_design}
                />
                <NavBarItem
                  to={`/${currentLanguage}${sectionSeparationChar}software`}
                  label={this.translation.sections_software}
                />
                {!isSinglePage && <NavBarItem
                  to={`/${currentLanguage}${sectionSeparationChar}about`}
                  label={this.translation.sections_aboutUs}
                />}
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
            id={selectedLanguage.ISO}
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
            {
              !isSinglePage
              && <DropdownMenuItem
                to={`/${currentLanguage}/about`}
                label={this.translation.sections_aboutUs}
              />
            }
          </DropdownMenu>
        </BreakMobile>
      </div>
    );
  }
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
  eye: PropTypes.shape({
    seeClick: PropTypes.func,
  }).isRequired,
  sectionSeparationChar: PropTypes.string,
};

Header.defaultProps = {
  sectionSeparationChar: '/',
};

export default withEye(Header);
