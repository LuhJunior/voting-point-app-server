const { Situacao } = require('../models');

async function createSituacao({ descricao }) {
  try {
    return await Situacao.create({ descricao });
  } catch (e) {
    throw e;
  }
}

async function getSituacaoById(id) {
  try {
    return await Situacao.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function getAllSituacao() {
  try {
    return await Situacao.findAll();
  } catch (e) {
    throw e;
  }
}

async function updateSituacao({ id, descricao }) {
  try {
    return await Situacao.upadte({ descricao }, { where: { id } });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createSituacao,
  getSituacaoById,
  getAllSituacao,
  updateSituacao,
};
