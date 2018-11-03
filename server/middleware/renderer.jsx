import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import path from 'path';
import fs from 'fs';

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
    featureFlags,
  };
};

export default (req, res) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const md = new MobileDetect(req.headers['user-agent']);

    // render the app as a string
    const clientSideParams = captureParams(req);
    const props = {
      ssr: true,
      isMobile: clientSideParams.queryParams.mobile === 'true' || !!md.mobile(),
    };
    const html = ReactDOMServer.renderToString(React.createElement(App, props));

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace(
        '<article id="root"/>',
        `<article id="root">${html}</article>`,
      ).replace(
        '{{clientSideParams}}',
        `JSON.parse(${JSON.stringify(clientSideParams)})`,
      ),
    );
  });
};
