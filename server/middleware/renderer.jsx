import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import Utils from '../../src/Utils';

import App from '../../src/App';

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

  // render the app as a string
  const clientSideParams = captureParams(req) || {};
  const props = {
    ssr: true,
    isMobile: clientSideParams.queryParams.mobile === 'true' || !!md.mobile(),
  };
  global.document = {}; // mock document for setting title
  const html = ReactDOMServer.renderToString(React.createElement(App, props));

  const vars = {
    title: `<title>${Utils.getPageTitle(req.path)}</title>`,
    root: `
    <script>
      window.appParams=${JSON.stringify(clientSideParams)}
    </script>
    ${html}`,
  };
  return res.render('index', vars);
};
