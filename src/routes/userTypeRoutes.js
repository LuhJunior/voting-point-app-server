const Router = require('express').Router();
const {
  addUserType,
  findUserTypeById,
  findAllUserType,
  alterUserTypeById,
  alterUserType,
} = require('../app/controllers/userTypeController');

Router.post('/', addUserType);

Router.get('/', findAllUserType);
Router.get('/:id', findUserTypeById);

Router.put('/:id', alterUserTypeById);
Router.put('/', alterUserType);

module.exports = Router;
