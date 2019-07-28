const Router = require('express').Router();
const {
  addUser,
  findUserById,
  findUserByMatricula,
  alterUserById,
  alterUser,
} = require('../app/controllers/userController');

Router.post('/', addUser);

Router.get('/', findUserByMatricula);
Router.get('/:id', findUserById);

Router.put('/:id', alterUserById);
Router.put('/', alterUser);

module.exports = Router;
