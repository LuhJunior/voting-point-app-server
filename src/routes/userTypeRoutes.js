const Router = require('express').Router();
const {
  addUserType,
  findUserTypeById,
  findAllUserType,
  alterUserType,
  alterUserTypeById,
} = require('../app/controllers/userController');

Router.post('/', addUserType);

Router.get('/', findAllUserType);
Router.get('/:id', findUserTypeById);

Router.put('/', alterUserType);
Router.put('/:id', alterUserTypeById);

module.exports = Router;
