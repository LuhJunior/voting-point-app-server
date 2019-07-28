const { ReuniaoType } = require('../models');

async function createReuniaoType({ tipo }) {
  try {
    return await ReuniaoType.create({ tipo });
  } catch (e) {
    throw e;
  }
}

async function getReuniaoTypeById(id) {
  try {
    return await ReuniaoType.findByPk(id, { attributes: ['id', 'tipo'] });
  } catch (e) {
    throw e;
  }
}

async function getAllReuniaoType() {
  try {
    return await ReuniaoType.findAll({ attributes: ['id', 'tipo'] });
  } catch (e) {
    throw e;
  }
}

async function updateReuniaoType({ id, tipo, where }) {
  try {
    if (id) return await ReuniaoType.update({ tipo }, { where: { id } });
    if (where) return await ReuniaoType.update({ tipo }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
  } catch (e) {
    throw e;
  }
}


module.exports = {
  createReuniaoType,
  getReuniaoTypeById,
  getAllReuniaoType,
  updateReuniaoType,
};
