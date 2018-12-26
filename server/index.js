import express, { Router } from 'express';
import path from 'path';
import 'ignore-styles';
import compression from 'compression';
import exphbs from 'express-handlebars';

import serverRenderer from './middleware/renderer';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(compression());

const router = Router();

router.use('^/$', serverRenderer);

router.use('/service-worker.js', (req, res) => {
  res.set('Cache-Control', 'no-cache');
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30s' },
));

router.use('*', serverRenderer);

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
