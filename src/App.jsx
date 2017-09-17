import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from './Views/home';
import DessignView from './Views/design';
import Header from './Components/Header';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div id="body">
            <Route exact path="/" render={HomeView} />
            <Route path="/design" render={DessignView} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
