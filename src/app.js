const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const auth = require('./middlewares/authMiddlewares');
const { logErrors, errorHandler, notFound } = require('./middlewares/errorMiddlewares');

const userRoutes = require('./routes/userRoutes');
const userTypeRoutes = require('./routes/userTypeRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/user_type', auth, userTypeRoutes);

app.use(logErrors);
app.use(errorHandler);
app.use(notFound);

module.exports = app;
