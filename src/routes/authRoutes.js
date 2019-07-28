const Router = require('express').Router();
const {
  signIn,
} = require('../app/controllers/authController');

Router.post('/sign_in', signIn);

module.exports = Router;
