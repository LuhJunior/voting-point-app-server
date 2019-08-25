const express = require('express');
const http = require('http');
const io = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const useRoutes = require('./routes');
const { useMiddlewares } = require('./middlewares');
const { useListeners } = require('./app/socket');

const App = () => {
  const app = express();
  const httpServer = http.createServer(app);
  const ioServer = io(httpServer);
  app.use(bodyParser.json());
  app.use(cors());

  useRoutes(app);
  useMiddlewares(app);
  useListeners(ioServer);
  return ({
    app,
    httpServer,
    ioServer,
  });
};

module.exports = App();
