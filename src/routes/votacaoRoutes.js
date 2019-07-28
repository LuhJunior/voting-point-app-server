const Router = require('express').Router();
const {
  addVotacao,
  findVotacaoById,
  findAllVotacao,
  findAllVotacaoByUserId,
  findAllVotacaoByPontoId,
  alterVotacao,
} = require('../app/controllers/votacaoController');

Router.post('/', addVotacao);

Router.get('/:id', findVotacaoById);
Router.get('/', findAllVotacao);
Router.get('/user/:id', findAllVotacaoByUserId);
Router.get('/ponto/:id', findAllVotacaoByPontoId);

Router.put('/', alterVotacao);

module.exports = Router;
