import express, { Router } from 'express';
import path from 'path';
import 'ignore-styles';
import compression from 'compression';
import exphbs from 'express-handlebars';
import cookieParser from 'cookie-parser';
import MatomoTracker from 'matomo-tracker';

import Utils from '../src/Utils';
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

router.use('^/$', redirectToLanguage);

router.use('/service-worker.js', (req, res) => {
  res.set('Cache-Control', 'max-age=0,no-cache,no-store,must-revalidate');
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
));

router.use('/ca', serverRenderer);
router.use('/es', serverRenderer);
router.use('/en', serverRenderer);
router.use('*', redirectToLanguage);

const html = exphbs.create({
  extname: 'html',
  helpers: {
    json: obj => JSON.stringify(obj),
  },
});

app.engine('html', html.engine);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '..', 'build'));

app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    process.abort();
  }
  console.log(`Elantris backend listening is ${PORT}`);
});
