import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import configs from './configs.js';
import apiRoutes from './routes/index.js';
import db from './database/index.js';

db.connect();

const app = express();

if (configs.env === 'development') {
  app.use(morgan('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // * Allow any source
  res.header(
    'Access-Control-Allow-Headeconfigs',
    'Origin, X-Resquested-With, Content-Type, Accept, Athorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
    res.status(200).json({});
  }
  next();
});

app.get('/', (req, res) => {
  res.json({ status: 200, result: `${configs.appName} api server.. nothing to see here` });
});

// api routes
app.use('/v0', apiRoutes); // we can add checkclient middleware to protect routes

app.use((req, res) => {
  const error = new Error('not found');
  error.status = 404;
  res.json({
    status: error.status,
    message: 'oups ! Looking for an unknown route',
  });
});

app.listen(configs.PORT, () => {
  console.log(`Server is running on ${configs.PORT}`);
});

export default app;
