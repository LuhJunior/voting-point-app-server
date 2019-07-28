const Router = require('express').Router();
const {
  addPonto,
  findPontoById,
  findAllPontoByReuniaoId,
  findAllPontoBySituacaoId,
  alterPonto,
} = require('../app/controllers/pontoController');

Router.post('/', addPonto);

Router.get('/:id', findPontoById);
Router.get('/reuniao/:id', findAllPontoByReuniaoId);
Router.get('/situacao/:id', findAllPontoBySituacaoId);

Router.put('/', alterPonto);

module.exports = Router;
