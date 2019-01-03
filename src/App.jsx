import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, StaticRouter, Route, Switch } from 'react-router-dom';
import 'typeface-montserrat';

import SetParameters from './Components/Common/Utility';
import CookieService from './Services/CookieService';

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

function App({ ssr, isMobile, url }) {
  const Router = ssr ? StaticRouter : BrowserRouter;
  const context = {};
  Utils.setIsMobile(isMobile);
  return (
    <Router location={url} context={context}>
      <div id="App">
        <SetParameters
          cookieService={CookieService}
          ssr={ssr}
        />
        <Header isMobile={Utils.isMobile()} />
        <main id="App-content">
          <Switch>
            <Route exact path="/" render={withTitle(Utils.getPageTitle('/'), HomeView)} />
            <Route exact path="/design/:project?" component={withTitle(Utils.getPageTitle('/design'), DesignView)} />
            <Route exact path="/software" render={withTitle(Utils.getPageTitle('/software'), SoftwareView)} />
            <Route exact path="/about" render={withTitle(Utils.getPageTitle('/about'), AboutUsView)} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <Footer />
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

