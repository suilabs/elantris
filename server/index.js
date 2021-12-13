import path from 'path';

import express, { Router } from 'express';
import 'ignore-styles';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import MatomoTracker from 'matomo-tracker';

import './polyfill/fetch';

import sitemap from './sitemap';
import serverRenderer from './middleware/renderer';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(compression());
app.use(cookieParser());

const router = Router();
const matomo = new MatomoTracker(2, 'https://mordor.suilabs.com/piwik.php');
matomo.on('error', (err) => {
  console.log('error tracking request: ', err);
});
app.locals.matomo = matomo;
router.get('*', (req, res, next) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  if (fullUrl.indexOf('www.') !== -1) {
    return res.redirect(301, fullUrl.replace('www.', ''));
  }
  return next();
});

router.use('^/sockjs-node/*', (req, res) => {
  res.send('OK');
});

router.use('/service-worker.js', (req, res) => {
  res.set('Cache-Control', 'max-age=0,no-cache,no-store,must-revalidate');
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

router.get('/sitemap.xml', sitemap);

router.use(express.static(path.resolve(__dirname, '..', 'build')));

router.use('/*', serverRenderer);

app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    process.abort();
  }
  console.log(`Elantris backend listening is ${PORT}`);
});
