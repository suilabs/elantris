import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';

if (typeof window === 'undefined') {
  ReactDOM.hydrate(React.createElement(App), document.getElementById('root'));
} else {
  ReactDOM.render(React.createElement(App), document.getElementById('root'));
}

// registerServiceWorker();
unregister();
