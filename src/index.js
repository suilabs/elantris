import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(React.createElement(Header), document.getElementById('header'));
ReactDOM.render(React.createElement(App), document.getElementById('root'));
// ReactDOM.render(React.createElement(Footer), document.getElementById('footer'));
registerServiceWorker();
