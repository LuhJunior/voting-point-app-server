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
    return await ReuniaoType.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function getAllReuniaoType() {
  try {
    return await ReuniaoType.findAll();
  } catch (e) {
    throw e;
  }
}

async function updateReuniaoType({ id, tipo }) {
  try {
    return await ReuniaoType.update({ tipo }, { where: { id } } );
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
