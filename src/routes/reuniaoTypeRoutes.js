const Router = require('express').Router();
const {
  addReuniaoType,
  findReuniaoTypeById,
  findAllReuniaoType,
  alterReuniaoType,
} = require('../app/controllers/reuniaoTypeController');

Router.post('/', addReuniaoType);

Router.get('/:id', findReuniaoTypeById);
Router.get('/', findAllReuniaoType);

Router.put('/', alterReuniaoType);

module.exports = Router;
