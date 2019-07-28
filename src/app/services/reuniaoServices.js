const { Reuniao } = require('../models');

async function createReuniao({ data, reuniao_type_id }) {
  try {
    return await Reuniao.create({ data, reuniao_type_id });
  } catch (e) {
    throw e;
  }
}

async function getReuniaoById(id) {
  try {
    return await Reuniao.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function getAllReuniao() {
  try {
    return await Reuniao.findAll();
  } catch (e) {
    throw e;
  }
}

async function updateReuniao({ id, data }) {
  try {
    return await Reuniao.update({ data }, { where: { id } });
  } catch (e) {
    throw e;
  }
}



module.exports = {
  createReuniao,
  getReuniaoById,
  getAllReuniao,
  updateReuniao,
};
