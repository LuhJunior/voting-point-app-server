const Router = require('express').Router();
const {
  addReuniao,
  findReuniaoById,
  findAllReuniao,
  findCurrentReuniao,
  alterReuniaoById,
  alterReuniaoStatusById,
  alterReuniao,
  removeReuniaoById,
} = require('../app/controllers/reuniaoController');

Router.post('/', addReuniao);

Router.get('/current', findCurrentReuniao);
Router.get('/', findAllReuniao);
Router.get('/:id', findReuniaoById);

Router.put('/', alterReuniao);
Router.put('/:id', alterReuniaoById);
Router.put('/status/:id', alterReuniaoStatusById);

Router.delete('/:id', removeReuniaoById);

module.exports = Router;
