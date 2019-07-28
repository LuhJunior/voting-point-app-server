const Router = require('express').Router();
const {
  addSituacao,
  findSituacaoById,
  findAllSituacao,
  alterSituacao,
} = require('../app/controllers/situacaoController');

Router.post('/', addSituacao);

Router.get('/:id', findSituacaoById);
Router.get('/', findAllSituacao);

Router.put('/', alterSituacao);

module.exports = Router;
