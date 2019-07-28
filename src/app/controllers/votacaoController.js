const {
  createVotacao,
  getVotacaoById,
  getAllVotacao,
  getAllVotacaoByUserId,
  getAllVotacaoByPontoId,
  updateVotacao,
} = require('../services/votacaoServices');

async function addVotacao(req, res, next) {
  try {
    const data = await createVotacao(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findVotacaoById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getVotacaoById(parseInt(id, 10));
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
    const { id } = req.params;
    const data = await getAllVotacaoByUserId(id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllVotacaoByPontoId(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getAllVotacaoByPontoId(id);
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
  findVotacaoById,
  findAllVotacao,
  findAllVotacaoByUserId,
  findAllVotacaoByPontoId,
  alterVotacao,
};
