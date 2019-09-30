const {
  createVotacao,
  getVotacaoByUserIdAndPontoId,
  getAllVotacao,
  getAllVotacaoByUserId,
  getAllVotacaoByPontoId,
  getAllVotacaoByReuniaoId,
  updateVotacao,
} = require('../services/votacaoServices');
const { getVotoTypeByType } = require('../services/votoTypeServices');

async function addVotacao(req, res, next) {
  try {
    const { voto_type: tipo, ...body } = req.body;
    const { id } = await getVotoTypeByType(tipo);
    const data = await createVotacao({ voto_type_id: id, ...body });
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findVotacaoByUserIdAndPontoId(req, res, next) {
  try {
    const { UserId, PontoId } = req.params;
    const data = await getVotacaoByUserIdAndPontoId(UserId, PontoId);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllVotacao(req, res, next) {
  try {
    const data = await getAllVotacao();
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllVotacaoByUserId(req, res, next) {
  try {
    const data = await getAllVotacaoByUserId(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllVotacaoByPontoId(req, res, next) {
  try {
    const data = await getAllVotacaoByPontoId(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllVotacaoByReuniaoId(req, res, next) {
  try {
    const data = await getAllVotacaoByReuniaoId(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterVotacaoByUserIdPontoId(req, res, next) {
  try {
    const { UserId, PontoId } = req.params;
    const data = await updateVotacao({ UserId, PontoId, ...req.body });
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterVotacao(req, res, next) {
  try {
    const data = await updateVotacao(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  addVotacao,
  findVotacaoByUserIdAndPontoId,
  findAllVotacao,
  findAllVotacaoByUserId,
  findAllVotacaoByPontoId,
  findAllVotacaoByReuniaoId,
  alterVotacaoByUserIdPontoId,
  alterVotacao,
};
