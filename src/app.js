const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const useRoutes = require('./routes');
const { useMiddlewares } = require('./middlewares');

const App = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(cors());

  useRoutes(app);
  useMiddlewares(app);

  return app;
};

module.exports = App();
