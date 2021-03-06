import React from 'react';
import ReactDOMServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import pathHelper from 'path';

import Utils from '../../src/Utils';
import ProjectService from '../../src/Services/ProjectService';
import render from './renderEngine';

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

const resolvePathProject = async (path) => {
  // eslint-disable-next-line no-unused-vars
  const [_, language, section, projectPath] = path.split('/');
  if (language.length !== 2 || !section) {
    return null;
  }

  const projects = await ProjectService.byLanguageAndSection(language, section);

  if (!projectPath) {
    return projects;
  }

  return projects.filter(proj => proj.url === projectPath);
};

export default async (req, res) => {
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
  const projects = await resolvePathProject(path);
  const props = {
    ssr: true,
    isMobile: clientSideParams.queryParams.mobile === 'true' || !!md.mobile(),
    url: path,
    projects,
  };

  global.document = {}; // mock document for setting title
  const html = ReactDOMServer.renderToString(React.createElement(App, props));

  const vars = {
    title: `<title>${Utils.getPageTitle(pagePath)}</title>`,
    metaDescription: Utils.getMetaDescription(pagePath),
    clientSideParams: `
    <script id="clientSideParams">
      window.appParams=${JSON.stringify(clientSideParams)}
    </script>`,
    root: `${html}`,
  };
  const htmlString = await render(pathHelper.join(__dirname, '..', '..', 'build/index.html'), vars);
  res.type('html');
  return res.send(htmlString);
};
