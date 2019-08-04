const Router = require('express').Router();
const {
  signIn,
} = require('../app/controllers/authController');

Router.post('/', signIn);

module.exports = Router;
