const { Votacao } = require('../models');

async function createVotacao({ situacao, user_id, voto_type_id, ponto_id }) {
  try {
    return await Votacao.create({ situacao, user_id, voto_type_id, ponto_id });
  } catch (e) {
    throw e;
  }
}

async function getVotacaoById(id) {
  try {
    return await Votacao.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function getAllVotacao() {
  try {
    return await Votacao.findAll();
  } catch (e) {
    throw e;
  }
}

async function getAllVotacaoByUserId(user_id) {
  try {
    return await Votacao.findAll({ where: { user_id }});
  } catch (e) {
    throw e;
  }
}

async function getAllVotacaoByPontoId(ponto_id) {
  try {
    return await Votacao.findAll({ where: { ponto_id }});
  } catch (e) {
    throw e;
  }
}

async function updateVotacao({ id, situacao }) {
  try {
    return await Votacao.update({ situacao }, { where: { id }});
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createVotacao,
  getVotacaoById,
  getAllVotacao,
  getAllVotacaoByUserId,
  getAllVotacaoByPontoId,
  updateVotacao,
};
