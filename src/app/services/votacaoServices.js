const {
  Votacao, User, Ponto, VotoType,
} = require('../models');

async function createVotacao({
  secreto, user_id: UserId, voto_type_id: VotoTypeId, ponto_id: PontoId,
}) {
  try {
    return await Votacao.create({
      secreto, UserId, VotoTypeId, PontoId,
    });
  } catch (e) {
    throw e;
  }
}

async function getVotacaoByUserIdAndPontoId(UserId, PontoId) {
  try {
    return await Votacao.findOne({
      where: {
        UserId,
        PontoId,
      },
      attributes: ['secreto'],
      include: [
        {
          model: User,
          attributes: ['nome', 'matricula'],
        },
        {
          model: Ponto,
          attributes: ['ponto'],
        },
        {
          model: VotoType,
          attributes: ['tipo'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllVotacao() {
  try {
    return await Votacao.findAll({
      attributes: ['secreto'],
      include: [
        {
          model: User,
          attributes: ['nome', 'matricula'],
        },
        {
          model: Ponto,
          attributes: ['ponto'],
        },
        {
          model: VotoType,
          attributes: ['tipo'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllVotacaoByUserId(UserId) {
  try {
    return await Votacao.findAll({
      where: { UserId },
      attributes: ['secreto'],
      include: [
        {
          model: User,
          attributes: ['nome', 'matricula'],
        },
        {
          model: Ponto,
          attributes: ['ponto'],
        },
        {
          model: VotoType,
          attributes: ['tipo'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllVotacaoByPontoId(PontoId) {
  try {
    return await Votacao.findAll({
      where: { PontoId },
      attributes: ['secreto'],
      include: [
        {
          model: User,
          attributes: ['nome', 'matricula'],
        },
        {
          model: Ponto,
          attributes: ['ponto'],
        },
        {
          model: VotoType,
          attributes: ['tipo'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function updateVotacao({
  UserId, PontoId, secreto, where,
}) {
  try {
    if (UserId && PontoId) {
      return await Votacao.update({ secreto }, {
        where: { UserId, PontoId },
      });
    }
    if (where) return await Votacao.update({ secreto }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createVotacao,
  getVotacaoByUserIdAndPontoId,
  getAllVotacao,
  getAllVotacaoByUserId,
  getAllVotacaoByPontoId,
  updateVotacao,
};
