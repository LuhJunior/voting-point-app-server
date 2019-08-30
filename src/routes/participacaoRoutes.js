const Router = require('express').Router();
const {
  addParticipacao,
  findParticipacaoByUserIdAndReuniaId,
  findAllParticipacao,
  findAllParticipacaoByUserId,
  findAllParticipacaoByReuniaoId,
} = require('../app/controllers/participacaoController');

Router.post('/', addParticipacao);

Router.get('/', findAllParticipacao);
Router.get('/user/:id', findAllParticipacaoByUserId);
Router.get('/reuniao/:id', findAllParticipacaoByReuniaoId);
Router.get('/:UserId/:ReuniaoId', findParticipacaoByUserIdAndReuniaId);

module.exports = Router;
