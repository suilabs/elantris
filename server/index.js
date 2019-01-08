import express, { Router } from 'express';
import path from 'path';
import 'ignore-styles';
import compression from 'compression';
import exphbs from 'express-handlebars';
import clearSiteData from 'clearsitedata';
import cookieParser from 'cookie-parser';

import Utils from '../src/Utils';
import serverRenderer from './middleware/renderer';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(compression());
app.use(cookieParser());

const router = Router();

router.get('*', clearSiteData());

router.use('^/$', (req, res) => {
  const to = req.originalUrl.split('/');
  if (to.length >= 2 && to[1].length <= 2) {
    to[1] = req.cookies.suiLanguage || Utils.getDefaultLanguage();
  } else if (to.length >= 2 && to[1].length > 2) {
    to.splice(1, 0, 'ca');
  }
  return res.redirect(to.join('/'));
});

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
router.use('*', (req, res) => {
  const to = req.originalUrl.split('/');
  if (to.length >= 2 && to[1].length === 2) {
    to[1] = 'ca';
  } else if (to.length >= 2 && to[1].length > 2) {
    to.splice(1, 0, 'ca');
  }
  return res.redirect(to.join('/'));
});

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
