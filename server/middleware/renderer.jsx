import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import fetch, { Headers } from 'node-fetch';

import Utils from '../../src/Utils';

import App from '../../src/App';

global.fetch = fetch;
global.Headers = Headers;

const captureParams = (req) => {
// eslint-disable-next-line prefer-const
  let { featureFlags, ...otherParams } = req.query;
  if (featureFlags) {
    featureFlags = featureFlags.split('|').reduce((ret, actual) => {
      const [key, value] = actual.split(':');
      return {
        ...ret,
        [key]: value,
      };
    }, {});
  }
  return {
    queryParams: otherParams,
    featureFlags: featureFlags || {},
  };
};


export default (req, res) => {
  const md = new MobileDetect(req.headers['user-agent']);
  global.window = {
    location: {
      pathname: req.originalUrl,
    },
  };

  // render the app as a string
  const clientSideParams = captureParams(req) || {};
  const path = req.originalUrl;
  const pagePath = path.split('/')[2] || 'home';
  req.app.locals.matomo.track({
    url: path,
    action_name: 'access',
    cvar: JSON.stringify({
      clientSideParams,
      node_env: process.env.NODE_ENV,
    }),
  });
  const props = {
    ssr: true,
    isMobile: clientSideParams.queryParams.mobile === 'true' || !!md.mobile(),
    url: path,
  };
  global.document = {}; // mock document for setting title
  const html = ReactDOMServer.renderToString(React.createElement(App, props));

  const vars = {
    title: `<title>${Utils.getPageTitle(pagePath)}</title>`,
    metaDescription: Utils.getMetaDescription(pagePath),
    root: `
    <script>
      window.appParams=${JSON.stringify(clientSideParams)}
    </script>
    ${html}`,
  };
  return res.render('index', vars);
};
