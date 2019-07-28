const { Reuniao, ReuniaoType } = require('../models');

async function createReuniao({ data, reuniao_type_id: ReuniaoTypeId }) {
  try {
    return await Reuniao.create({ data, ReuniaoTypeId });
  } catch (e) {
    throw e;
  }
}

async function getReuniaoById(id) {
  try {
    return await Reuniao.findByPk(id, {
      attributes: ['id', 'data'],
      include: {
        model: ReuniaoType,
        attributes: ['tipo'],
      },
    });
  } catch (e) {
    throw e;
  }
}

async function getAllReuniao() {
  try {
    return await Reuniao.findAll({
      attributes: ['id', 'data'],
      include: {
        model: ReuniaoType,
        attributes: ['tipo'],
      },
    });
  } catch (e) {
    throw e;
  }
}

async function updateReuniao({
  id, data, reuniao_type_id: ReuniaoTypeId, where,
}) {
  try {
    if (id) return await Reuniao.update({ data, ReuniaoTypeId }, { where: { id } });
    if (where) return await Reuniao.update({ data }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
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
