const { Reuniao, ReuniaoType, Ponto } = require('../models');

async function createReuniao({
  data, hora_inicio: inicio, hora_fim: fim, reuniao_type_id: ReuniaoTypeId,
}) {
  try {
    return await Reuniao.create({
      data,
      hora_inicio: inicio,
      hora_fim: fim,
      ReuniaoTypeId,
    });
  } catch (e) {
    throw e;
  }
}

async function getReuniaoById(id) {
  try {
    return await Reuniao.findByPk(id, {
      attributes: ['id', 'data', 'hora_inicio', 'hora_fim'],
      include: [
        {
          model: ReuniaoType,
          attributes: ['tipo'],
        },
        {
          model: Ponto,
          attributes: ['ponto'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllReuniao() {
  try {
    return await Reuniao.findAll({
      attributes: ['id', 'data', 'hora_inicio', 'hora_fim'],
      include: [
        {
          model: ReuniaoType,
          attributes: ['tipo'],
        },
        {
          model: Ponto,
          attributes: ['ponto'],
        },
      ],
      order: [
        ['data', 'ASC'],
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getCurrentReuniao() {
  try {
    return await Reuniao.findAll({
      attributes: ['id', 'data', 'hora_inicio', 'hora_fim'],
      where: { data: new Date().toISOString() },
      include: [
        {
          model: ReuniaoType,
          attributes: ['tipo'],
        },
        {
          model: Ponto,
          attributes: ['ponto'],
        },
      ],
      order: [
        ['hora_inicio', 'ASC'],
      ],
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
  getCurrentReuniao,
  updateReuniao,
};
