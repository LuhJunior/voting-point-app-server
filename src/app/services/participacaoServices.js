const { Participacao, User, Reuniao } = require('../models');

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

async function createParticipacao({ chegada, user_id: UserId, reuniao_id: ReuniaoId }) {
  try {
    const reuniao = await getParticipacaoByUserIdAndReuniaoId(UserId, ReuniaoId);
    if (reuniao) return ({ msg: 'Participação já registrada' });
    return await Participacao.create({ chegada, UserId, ReuniaoId });
  } catch (e) {
    throw e;
  }
}

async function getAllParticipacao() {
  try {
    return await Participacao.findAll({
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

async function getAllParticipacaoByUserId(UserId) {
  try {
    return await Participacao.findAll({ where: { UserId } }, {
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

async function getAllParticipacaoByReuniaoId(ReuniaoId) {
  try {
    return await Participacao.findAll({ where: { ReuniaoId } }, {
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

module.exports = {
  createParticipacao,
  getParticipacaoByUserIdAndReuniaoId,
  getAllParticipacao,
  getAllParticipacaoByUserId,
  getAllParticipacaoByReuniaoId,
};
