import express, { Router } from 'express';
import path from 'path';
import 'ignore-styles';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import MatomoTracker from 'matomo-tracker';

import './polyfill/fetch';
import Utils from '../src/Utils';
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

const redirectToLanguage = (req, res) => {
  const to = req.originalUrl.split('/');
  if (to.length >= 2 && to[1].length <= 2) {
    to[1] = req.cookies.suiLanguage || Utils.getDefaultLanguage();
  } else if (to.length >= 2 && to[1].length > 2) {
    to.splice(1, 0, 'ca');
  }
  return res.redirect(to.join('/'));
};

router.use('^/sockjs-node/*', (req, res) => {
  res.send('OK');
});

router.use('^/$', redirectToLanguage);

router.use('/service-worker.js', (req, res) => {
  res.set('Cache-Control', 'max-age=0,no-cache,no-store,must-revalidate');
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

router.get('/sitemap.xml', sitemap);

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
));

router.use('/ca', serverRenderer);
router.use('/es', serverRenderer);
router.use('/en', serverRenderer);
router.use('*', redirectToLanguage);

app.use(router);

app.get('/');
app.get('/add');

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    process.abort();
  }
  console.log(`Elantris backend listening is ${PORT}`);
});
