const Router = require('express').Router();
const {
  addPonto,
  findPontoById,
  findAllPonto,
  findAllPontoByReuniaoId,
  findAllPontoBySituacaoId,
  alterPontoById,
  alterPonto,
} = require('../app/controllers/pontoController');

Router.post('/', addPonto);

Router.get('/:id', findPontoById);
Router.get('/', findAllPonto);
Router.get('/reuniao/:id', findAllPontoByReuniaoId);
Router.get('/situacao/:id', findAllPontoBySituacaoId);

Router.put('/:id', alterPontoById);
Router.put('/', alterPonto);

module.exports = Router;
