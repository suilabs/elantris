import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.hydrate(React.createElement(App), document.getElementById('root'));

registerServiceWorker();
