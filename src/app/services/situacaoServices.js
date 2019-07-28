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
    return await Situacao.findByPk(id, { attributes: ['id', 'descricao'] });
  } catch (e) {
    throw e;
  }
}

async function getAllSituacao() {
  try {
    return await Situacao.findAll({ attributes: ['id', 'descricao'] });
  } catch (e) {
    throw e;
  }
}

async function updateSituacao({ id, descricao, where }) {
  try {
    if (id) return await Situacao.update({ descricao }, { where: { id } });
    if (where) return await Situacao.update({ descricao }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
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
