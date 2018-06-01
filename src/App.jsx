import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'typeface-montserrat';

import withWindowQueryString from './HOC/withWindowQueryString';

import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeView from './Views/home';
import DesignView from './Views/design';
import SoftwareView from './Views/software';
import AboutUsView from './Views/about';
import Admin from './Views/admin';

import NotFound from './Views/NotFound';

import './App.css';

const RouteWithQueryParams = withWindowQueryString(Route);

export default () => (
  <BrowserRouter>
    <div id="App">
      <div id="App-content">
        <Header />
        <Switch>
          <RouteWithQueryParams exact path="/" render={HomeView} />
          <RouteWithQueryParams exact path="/design/:project?" component={DesignView} />
          <RouteWithQueryParams exact path="/software" render={SoftwareView} />
          <RouteWithQueryParams exact path="/about" render={AboutUsView} />
          <RouteWithQueryParams exact path="/admin" render={Admin} />
          <RouteWithQueryParams component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
