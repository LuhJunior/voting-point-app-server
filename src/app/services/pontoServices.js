const { Ponto } = require('../models');

async function createPonto({ reuniao_id: rId, situacao_id: sId }) {
  try {
    return await Ponto.create({ reuniao_id: rId, situacao_id: sId });
  } catch (e) {
    throw e;
  }
}

async function getPontoById(id) {
  try {
    return await Ponto.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function getAllPontoByReuniaoId(reuniaoId) {
  try {
    return await Ponto.findAll({ where: { reuniao_id: reuniaoId } });
  } catch (e) {
    throw e;
  }
}

async function getAllPontoBySituacaoId(situacaoId) {
  try {
    return await Ponto.findAll({ where: { situacao_id: situacaoId } });
  } catch (e) {
    throw e;
  }
}

async function upadatePonto({ id, situacao_id: situacaoId }) {
  try {
    return await Ponto.update({ situacao_id: situacaoId }, { where: { id } });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createPonto,
  getPontoById,
  getAllPontoByReuniaoId,
  getAllPontoBySituacaoId,
  upadatePonto,
};
