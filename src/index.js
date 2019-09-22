import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import App from './App';
import { unregister } from './registerServiceWorker';

if (typeof window === 'undefined') {
  ReactDOM.hydrate(React.createElement(App), document.getElementById('root'));
} else {
  ReactDOM.render(React.createElement(App), document.getElementById('root'));
}

// registerServiceWorker();
unregister();
