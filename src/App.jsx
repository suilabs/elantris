import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  StaticRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import 'typeface-montserrat';

import SetParameters from './Components/Common/Utility';
import CookieService from './Services/CookieService';
import eyeService from './Services/EyeService';
import { Provider } from './Services/Context';
import Utils from './Utils';
import Header from './Components/Header';
// import Footer from './Components/Footer';
import withTitle from './Views/HoC/withTitle';
import HomeView from './Views/home';
import NotFound from './Views/NotFound';
import './App.scss';
import Footer from './Components/Footer';

const withPageView = (Component) => (props) => {
  eyeService.seePage();
  return <Component {...props} />;
};

const Main = (props) => {
  const { match } = props;
  console.log(match);
  return (
    <main id="App-content">
      <Switch>
        <Route
          exact
          path="/photos/:project?"
          render={withTitle(Utils.getPageTitle('home'), withPageView(HomeView))}
        />
        <Route exact path="/">
          <Redirect to="/photos" />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </main>
  );
};

Main.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }).isRequired,
};

const Routes = ({ match }) => (
  <Fragment>
    <Header isMobile={Utils.isMobile()} />
    <Main match={match} />
    <Footer />
  </Fragment>
);

Routes.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
  }),
};

Routes.defaultProps = {
  match: { url: '/ca' },
};

function App({ ssr, isMobile, url, projects }) {
  const Router = ssr ? StaticRouter : BrowserRouter;
  const context = {};
  Utils.setIsMobile(isMobile);
  Utils.setIsSSR(ssr);
  return (
    <Provider value={{ projects }}>
      <Router location={url} context={context}>
        <div id="App">
          <SetParameters
            cookieService={CookieService}
            ssr={ssr}
            projectsList={projects}
          />
          <Switch>
            <Route path="*" component={Routes} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  ssr: PropTypes.bool,
  isMobile: PropTypes.bool,
  url: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.object),
};

App.defaultProps = {
  ssr: false,
  isMobile: false,
  url: '',
  projects: [],
};

export default App;
