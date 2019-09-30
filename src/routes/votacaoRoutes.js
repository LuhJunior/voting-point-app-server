const Router = require('express').Router();
const {
  addVotacao,
  findVotacaoByUserIdAndPontoId,
  findAllVotacao,
  findAllVotacaoByUserId,
  findAllVotacaoByPontoId,
  findAllVotacaoByReuniaoId,
  alterVotacaoByUserIdPontoId,
  alterVotacao,
} = require('../app/controllers/votacaoController');

Router.post('/', addVotacao);

Router.get('/', findAllVotacao);
Router.get('/user/:id', findAllVotacaoByUserId);
Router.get('/ponto/:id', findAllVotacaoByPontoId);
Router.get('/reuniao/:id', findAllVotacaoByReuniaoId);
Router.get('/:UserId/:PontoId', findVotacaoByUserIdAndPontoId);

Router.put('/:UserId/:PontoId', alterVotacaoByUserIdPontoId);
Router.put('/', alterVotacao);

module.exports = Router;
