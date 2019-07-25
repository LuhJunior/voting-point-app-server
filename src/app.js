const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const auth = require('./middlewares/auth');
const error = require('./middlewares/error');

const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);

app.use(error);

module.exports = app;
