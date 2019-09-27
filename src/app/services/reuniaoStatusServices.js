const { ReuniaoStatus } = require('../models');

async function createReuniaoStatus({ descricao }) {
  try {
    return await ReuniaoStatus.create({ descricao });
  } catch (e) {
    throw e;
  }
}

async function getReuniaoStatusByDescricao(descricao) {
  try {
    return await ReuniaoStatus.findOne({ attributes: ['id', 'descricao'], where: { descricao } });
  } catch (e) {
    throw e;
  }
}

async function getReuniaoStatusById(id) {
  try {
    return await ReuniaoStatus.findByPk(id, { attributes: ['id', 'descricao'] });
  } catch (e) {
    throw e;
  }
}

async function getAllReuniaoStatus() {
  try {
    return await ReuniaoStatus.findAll({ attributes: ['id', 'descricao'] });
  } catch (e) {
    throw e;
  }
}

async function updateReuniaoStatus({ id, descricao, where }) {
  try {
    if (id) return await ReuniaoStatus.update({ descricao }, { where: { id } });
    if (where) return await ReuniaoStatus.update({ descricao }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
  } catch (e) {
    throw e;
  }
}


module.exports = {
  createReuniaoStatus,
  getReuniaoStatusById,
  getAllReuniaoStatus,
  getReuniaoStatusByDescricao,
  updateReuniaoStatus,
};
