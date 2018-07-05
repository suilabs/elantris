import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'typeface-montserrat';

import { withSuilabs, SetParameters } from './Components/Common/Utility';


import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeView from './Views/home';
import DesignView from './Views/design';
import SoftwareView from './Views/software';
import AboutUsView from './Views/about';
import Admin from './Views/admin';

import NotFound from './Views/NotFound';

import './App.css';

export default () => (
  <BrowserRouter>
    <div id="App">
      <SetParameters />
      <div id="App-content">
        <Header />
        <Switch>
          <Route exact path="/" render={withSuilabs(HomeView)} />
          <Route exact path="/design/:project?" component={withSuilabs(DesignView)} />
          <Route exact path="/software" render={withSuilabs(SoftwareView)} />
          <Route exact path="/about" render={withSuilabs(AboutUsView)} />
          <Route exact path="/admin" render={withSuilabs(Admin)} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
