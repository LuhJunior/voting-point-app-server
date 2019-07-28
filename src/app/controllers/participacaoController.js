const {
  createParticipacao,
  getParticipacaoByUserIdAndReuniaoId,
  getAllParticipacao,
  getAllParticipacaoByUserId,
  getAllParticipacaoByReuniaoId,
} = require('../services/participacaoServices');

async function addParticipacao(req, res, next) {
  try {
    const data = await createParticipacao(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findParticipacaoByUserIdAndReuniaId(req, res, next) {
  try {
    const { UserId, ReuniaoId } = req.params;
    const data = await getParticipacaoByUserIdAndReuniaoId(UserId, ReuniaoId);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllParticipacao(req, res, next) {
  try {
    const data = await getAllParticipacao();
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllParticipacaoByUserId(req, res, next) {
  try {
    const data = await getAllParticipacaoByUserId(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllParticipacaoByReuniaoId(req, res, next) {
  try {
    const data = await getAllParticipacaoByReuniaoId(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  addParticipacao,
  findParticipacaoByUserIdAndReuniaId,
  findAllParticipacao,
  findAllParticipacaoByUserId,
  findAllParticipacaoByReuniaoId,
};
