import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Header from './Components/Header';
// import Footer from './Components/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.hydrate(React.createElement(App), document.getElementById('root'));

registerServiceWorker();
