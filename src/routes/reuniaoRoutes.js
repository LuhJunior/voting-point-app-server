const Router = require('express').Router();
const {
  addReuniao,
  findReuniaoById,
  findAllReuniao,
  alterReuniaoById,
  alterReuniao,
} = require('../app/controllers/reuniaoController');

Router.post('/', addReuniao);

Router.get('/:id', findReuniaoById);
Router.get('/', findAllReuniao);

Router.put('/:id', alterReuniaoById);
Router.put('/', alterReuniao);

module.exports = Router;
