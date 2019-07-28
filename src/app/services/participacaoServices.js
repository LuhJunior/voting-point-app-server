const { Participacao } = require('../models');

async function createParticipacao({ user_id: uId, reuniao_id: rId }) {
  try {
    return await Participacao.create({ user_id: uId, reuniao_id: rId });
  } catch (e) {
    throw e;
  }
}

async function getParticipacaoById(id) {
  try {
    return await Participacao.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function getAllParticipacao() {
  try {
    return await Participacao.findAll();
  } catch (e) {
    throw e;
  }
}

async function getAllParticipacaoByUserId(userId) {
  try {
    return await Participacao.findAll({ where: { user_id: userId } });
  } catch (e) {
    throw e;
  }
}

async function getAllParticipacaoByReuniaoId(reuniaoId) {
  try {
    return await Participacao.findAll({ where: { reuniao_id: reuniaoId } });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createParticipacao,
  getParticipacaoById,
  getAllParticipacao,
  getAllParticipacaoByUserId,
  getAllParticipacaoByReuniaoId,
};
