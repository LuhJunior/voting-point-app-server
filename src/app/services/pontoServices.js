const { Ponto, Situacao } = require('../models');

async function createPonto({ ponto, reuniao_id: ReuniaoId }) {
  try {
    return await Ponto.create({ ponto, ReuniaoId });
  } catch (e) {
    throw e;
  }
}

async function getPontoById(id) {
  try {
    return await Ponto.findByPk(id, {
      attributes: ['id', 'ponto'],
      include: [
        {
          model: Situacao,
          attributes: ['descricao'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllPonto() {
  try {
    return await Ponto.findAll({
      attributes: ['id', 'ponto'],
      include: [
        {
          model: Situacao,
          attributes: ['descricao'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllPontoByReuniaoId(ReuniaoId) {
  try {
    return await Ponto.findAll({
      where: { ReuniaoId },
      attributes: ['id', 'ponto'],
      include: [
        {
          model: Situacao,
          attributes: ['descricao'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllPontoBySituacaoId(SituacaoId) {
  try {
    return await Ponto.findAll({
      where: { SituacaoId },
      attributes: ['id', 'ponto'],
      include: [
        {
          model: Situacao,
          attributes: ['descricao'],
        },
      ],
    });
  } catch (e) {
    throw e;
  }
}

async function upadatePonto({ id, situacao_id: SituacaoId, where }) {
  try {
    if (id) return await Ponto.update({ SituacaoId }, { where: { id } });
    if (where) return await Ponto.update({ SituacaoId }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createPonto,
  getPontoById,
  getAllPonto,
  getAllPontoByReuniaoId,
  getAllPontoBySituacaoId,
  upadatePonto,
};
