const Router = require('express').Router();
const {
  addParticipacao,
  findParticipacaoById,
  findAllParticipacao,
  findAllParticipacaoByUserId,
  findAllParticipacaoByReuniaoId,
} = require('../app/controllers/participacaoController');

Router.post('/', addParticipacao);

Router.get('/:id', findParticipacaoById);
Router.get('/', findAllParticipacao);
Router.get('/user/:id', findAllParticipacaoByUserId);
Router.get('/reuniao/:id', findAllParticipacaoByReuniaoId);

module.exports = Router;
