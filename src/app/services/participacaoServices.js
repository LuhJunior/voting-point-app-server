const { Participacao, User, Reuniao } = require('../models');

async function createParticipacao({ chegada, user_id: UserId, reuniao_id: ReuniaoId }) {
  try {
    return await Participacao.create({ chegada, UserId, ReuniaoId });
  } catch (e) {
    throw e;
  }
}

async function getParticipacaoByUserIdAndReuniaoId(UserId, ReuniaoId) {
  try {
    return await Participacao.findOne({
      where: {
        UserId,
        ReuniaoId,
      },
      attributes: ['chegada'],
      include: [
        {
          model: User,
          attributes: ['nome', 'matricula'],
        },
        {
          model: Reuniao,
          attributes: ['id', 'data'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllParticipacao() {
  try {
    return await Participacao.findAll({
      attributes: ['id', 'chegada'],
      include: [
        {
          model: User,
          attributes: ['nome', 'matricula'],
        },
        {
          model: Reuniao,
          attributes: ['id', 'data'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllParticipacaoByUserId(UserId) {
  try {
    return await Participacao.findAll({ where: { UserId } }, {
      attributes: ['id', 'chegada'],
      include: [
        {
          model: User,
          attributes: ['nome', 'matricula'],
        },
        {
          model: Reuniao,
          attributes: ['id', 'data'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllParticipacaoByReuniaoId(ReuniaoId) {
  try {
    return await Participacao.findAll({ where: { ReuniaoId } }, {
      attributes: ['id', 'chegada'],
      include: [
        {
          model: User,
          attributes: ['nome', 'matricula'],
        },
        {
          model: Reuniao,
          attributes: ['id', 'data'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createParticipacao,
  getParticipacaoByUserIdAndReuniaoId,
  getAllParticipacao,
  getAllParticipacaoByUserId,
  getAllParticipacaoByReuniaoId,
};
