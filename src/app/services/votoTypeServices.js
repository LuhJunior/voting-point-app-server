const { VotoType } = require('../models');

async function createVotoType({ tipo }) {
  try {
    return await VotoType.create({ tipo });
  } catch (e) {
    throw e;
  }
}

async function getVotoTypeById(id) {
  try {
    return await VotoType.findByPk(id, {
      attributes: ['id', 'tipo'],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllVotoType() {
  try {
    return await VotoType.findAll({ attributes: ['id', 'tipo'] });
  } catch (e) {
    throw e;
  }
}

async function updateVotoType({ id, tipo, where }) {
  try {
    if (id) return await VotoType.update({ tipo }, { where: { id } });
    if (where) return await VotoType.update({ tipo }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createVotoType,
  getVotoTypeById,
  getAllVotoType,
  updateVotoType,
};
