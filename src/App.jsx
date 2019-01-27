import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, StaticRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'typeface-montserrat';

import SetParameters from './Components/Common/Utility';
import CookieService from './Services/CookieService';
import eyeService from './Services/EyeService';

import Utils from './Utils';

import Header from './Components/Header';
import Footer from './Components/Footer';
import withTitle from './Views/HoC/withTitle';
import HomeView from './Views/home';
import DesignView from './Views/design';
import SoftwareView from './Views/software';
import AboutUsView from './Views/about';

import NotFound from './Views/NotFound';

import './App.scss';

const withPageView = Component => (props) => {
  eyeService.seePage();
  return <Component {...props} />;
};

const Routes = ({ match }) => {
  CookieService.putSessionCookie('suiLanguage', match.url.split('/')[1]);
  return [
    <Header
      isMobile={Utils.isMobile()}
      onChangeLanguage={(nLanguage) => {
        CookieService.putSessionCookie('suiLanguage', nLanguage);
        const currentLocation = window.location.pathname.split('/');
        currentLocation[1] = nLanguage;
        window.setTimeout(window.location = currentLocation.join('/'), 0);
      }}
    />,
    <main id="App-content">
      <Switch>
        <Route exact path={`${match.url}`} render={withTitle(Utils.getPageTitle('home'), withPageView(HomeView))} />
        <Route exact path={`${match.url}/design/:project?`} component={withTitle(Utils.getPageTitle('design'), withPageView(DesignView))} />
        <Route exact path={`${match.url}/software`} render={withTitle(Utils.getPageTitle('software'), withPageView(SoftwareView))} />
        <Route exact path={`${match.url}/about`} render={withTitle(Utils.getPageTitle('about'), withPageView(AboutUsView))} />
        <Route path="*" component={NotFound} />
      </Switch>
    </main>,
    <Footer />,
  ];
};

Routes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

Routes.defaultProps = {
  match: { url: '/ca' },
};

const GuessLanguage = ({ location }) => {
  const cookieLanguage = CookieService.getPlainCookie('suiLanguage') || 'ca';
  const to = location.pathname.split('/');
  if (to.length >= 2 && to[1].length <= 2) {
    to[1] = cookieLanguage;
  } else if (to.length >= 2 && to[1].length > 2) {
    to.splice(1, 0, cookieLanguage);
  }
  return <Redirect to={to.join('/')} />;
};

GuessLanguage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

GuessLanguage.defaultProps = {
  location: { pathname: '/' },
};

function App({ ssr, isMobile, url }) {
  const Router = ssr ? StaticRouter : BrowserRouter;
  const context = {};
  Utils.setIsMobile(isMobile);
  Utils.setIsSSR(ssr);
  return (
    <Router location={url} context={context}>
      <div id="App">
        <SetParameters
          cookieService={CookieService}
          ssr={ssr}
        />
        <Switch>
          <Route path="/ca" component={Routes} />
          <Route path="/en" component={Routes} />
          <Route path="/es" component={Routes} />
          <Route path="*" component={GuessLanguage} />
        </Switch>
      </div>
    </Router>
  );
}

App.propTypes = {
  ssr: PropTypes.bool,
  isMobile: PropTypes.bool,
  url: PropTypes.string,
};

App.defaultProps = {
  ssr: false,
  isMobile: false,
  url: '',
};

export default App;

