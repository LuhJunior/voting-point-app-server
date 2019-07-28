const {
  createParticipacao,
  getParticipacaoById,
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

async function findParticipacaoById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getParticipacaoById(parseInt(id, 10));
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
    const { id } = req.parms;
    const data = await getAllParticipacaoByUserId(parseInt(id, 10));
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllParticipacaoByReuniaoId(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getAllParticipacaoByReuniaoId(parseInt(id, 10));
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  addParticipacao,
  findParticipacaoById,
  findAllParticipacao,
  findAllParticipacaoByUserId,
  findAllParticipacaoByReuniaoId,
}
