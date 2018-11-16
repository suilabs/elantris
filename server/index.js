import express, { Router } from 'express';
import path from 'path';
import 'ignore-styles';

import serverRenderer from './middleware/renderer';

const PORT = process.env.PORT || 5000;
const app = express();
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

app.use(router);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    process.abort();
  }
  console.log(`Elantris backend listening is ${PORT}`);
});
