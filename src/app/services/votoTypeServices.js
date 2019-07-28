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
    return await VotoType.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function getAllVotoType() {
  try {
    return await VotoType.findAll();
  } catch (e) {
    throw e;
  }
}

async function updateVotoType({ id, tipo }) {
  try {
    return await VotoType.upadate({ tipo }, { where: { id } });
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
