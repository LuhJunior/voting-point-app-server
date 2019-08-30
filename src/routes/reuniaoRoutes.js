const Router = require('express').Router();
const {
  addReuniao,
  findReuniaoById,
  findAllReuniao,
  findCurrentReuniao,
  alterReuniaoById,
  alterReuniao,
} = require('../app/controllers/reuniaoController');

Router.post('/', addReuniao);

Router.get('/current', findCurrentReuniao);
Router.get('/', findAllReuniao);
Router.get('/:id', findReuniaoById);

Router.put('/', alterReuniao);
Router.put('/:id', alterReuniaoById);

module.exports = Router;
