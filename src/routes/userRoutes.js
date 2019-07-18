const Router = require('express').Router();
const {
  addUser,
  findUser
} = require('../app/controllers/userController');

Router.post('/', addUser);

Router.get('/', findUser);

module.exports = Router;
