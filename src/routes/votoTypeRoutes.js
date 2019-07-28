const Router = require('express').Router();
const {
  addVotacaoType,
  findVotoTypeById,
  findAllVotoType,
  alterVotoTypeById,
  alterVotoType,
} = require('../app/controllers/votoTypeController');

Router.post('/', addVotacaoType);

Router.get('/:id', findVotoTypeById);
Router.get('/', findAllVotoType);

Router.put('/:id', alterVotoTypeById);
Router.put('/', alterVotoType);

module.exports = Router;
