const Router = require('express').Router();
const {
  addParticipacao,
  findParticipacaoByUserIdAndReuniaId,
  findAllParticipacao,
  findAllParticipacaoByUserId,
  findAllParticipacaoByReuniaoId,
} = require('../app/controllers/participacaoController');

Router.post('/', addParticipacao);

Router.get('/:UserId/:ReuniaoId', findParticipacaoByUserIdAndReuniaId);
Router.get('/', findAllParticipacao);
Router.get('/user/:id', findAllParticipacaoByUserId);
Router.get('/reuniao/:id', findAllParticipacaoByReuniaoId);

module.exports = Router;
