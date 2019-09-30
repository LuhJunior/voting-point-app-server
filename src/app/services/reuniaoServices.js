const {
  Reuniao,
  ReuniaoType,
  Votacao,
  Sequelize: { Op },
} = require('../models');

const attributes = ['id', 'titulo', 'data', 'hora_inicio', 'hora_segunda_chamada'];

async function createReuniao({
  data,
  titulo,
  hora_inicio: inicio,
  hora_segunda_chamada: segundaChamada,
  reuniao_type_id: ReuniaoTypeId,
}) {
  try {
    return await Reuniao.create({
      titulo,
      data,
      hora_inicio: inicio,
      hora_segunda_chamada: segundaChamada,
      ReuniaoTypeId,
    });
  } catch (e) {
    throw e;
  }
}

async function getReuniaoById(id) {
  try {
    return await Reuniao.findByPk(id, {
      attributes,
      include: [
        {
          model: ReuniaoType,
          attributes: ['tipo'],
        },
        {
          association: 'Ponto',
          attributes: ['id', 'ponto'],
          include: {
            attributes: ['descricao'],
            association: 'Situacao',
          },
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
      attributes,
      include: [
        {
          model: ReuniaoType,
          attributes: ['tipo'],
        },
        {
          association: 'Ponto',
          attributes: ['id', 'ponto'],
        },
        {
          association: 'ReuniaoStatus',
          attributes: ['id', 'descricao'],
        },
      ],
      order: [
        ['data', 'DESC'],
        ['hora_inicio', 'DESC'],
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getCurrentReuniao() {
  try {
    return await Reuniao.findOne({
      attributes,
      where: { data: new Date().toISOString() },
      include: [
        {
          association: 'ReuniaoType',
          attributes: ['tipo'],
        },
        {
          association: 'ReuniaoStatus',
          attributes: ['descricao'],
          where: {
            [Op.or]: [
              { descricao: 'Habilitada' },
              { descricao: 'Iniciada' },
            ],
          },
          require: true,
        },
        /* {
          association: 'Ponto',
          attributes: ['id', 'ponto'],
          include: [
            {
              model: User,
            },
          ],
          order: [
            ['id', 'ASC'],
          ],
        },
        {
          model: User,
        }, */
      ],
      order: [
        ['hora_inicio', 'DESC'],
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function updateReuniao({
  id, data, reuniao_type_id: ReuniaoTypeId, reuniao_status_id: ReuniaoStatusId, where,
}) {
  try {
    if (id) return Reuniao.update({ data, ReuniaoTypeId, ReuniaoStatusId }, { where: { id } });
    if (where) return await Reuniao.update({ data }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
  } catch (e) {
    throw e;
  }
}

async function updateReuniaoStatus({
  id, reuniao_status_id: ReuniaoStatusId,
}) {
  try {
    return Reuniao.update({ ReuniaoStatusId }, { where: { id } });
  } catch (e) {
    throw e;
  }
}

async function deleteReuniaoById(id) {
  try {
    return await Reuniao.destroy({ where: { id } });
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
  updateReuniaoStatus,
  deleteReuniaoById,
};
