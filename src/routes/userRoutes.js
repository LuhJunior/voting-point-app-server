const Router = require('express').Router();
const {
  addUser,
  findUserById,
  findUserByMatricula,
  alterUser,
  alterUserById,
} = require('../app/controllers/userController');

Router.post('/', addUser);

Router.get('/', findUserByMatricula);
Router.get('/:id', findUserById);

Router.put('/', alterUser);
Router.put('/:id', alterUserById);

module.exports = Router;
