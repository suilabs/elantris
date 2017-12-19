import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeView from './Views/home';
import DesignView from './Views/design';
import SoftwareView from './Views/software';
import AboutUsView from './Views/about';
import ContactView from './Views/contact';
import Admin from './Views/admin';

import NotFound from './Views/NotFound';

import './App.css';

export default () => (
  <BrowserRouter>
    <div>
      <Header />
      <div id="body">
        <Switch>
          <Route exact path="/" render={HomeView} />
          <Route exact path="/design/:project?" component={DesignView} />
          <Route exact path="/software" render={SoftwareView} />
          <Route exact path="/about" render={AboutUsView} />
          <Route exact path="/contact" render={ContactView} />
          <Route exact path="/admin" render={Admin} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
