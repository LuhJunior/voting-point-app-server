const Router = require('express').Router();
const {
  addReuniaoStatus,
  findReuniaoStatusById,
  findAllReuniaoStatus,
  alterReuniaoStatusById,
  alterReuniaoStatus,
} = require('../app/controllers/reuniaoStatusController');

Router.post('/', addReuniaoStatus);

Router.get('/:id', findReuniaoStatusById);
Router.get('/', findAllReuniaoStatus);

Router.put('/:id', alterReuniaoStatusById);
Router.put('/', alterReuniaoStatus);

module.exports = Router;
