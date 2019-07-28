const {
  createSituacao,
  getSituacaoById,
  getAllSituacao,
  updateSituacao,
} = require('../services/situacaoServices');

async function addSituacao(req, res, next) {
  try {
    const data = await createSituacao(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findSituacaoById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getSituacaoById(parseInt(id, 10));
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllSituacao(req, res, next) {
  try {
    const data = await getAllSituacao();
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterSituacao(req, res, next) {
  try {
    const data = await updateSituacao(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  addSituacao,
  findSituacaoById,
  findAllSituacao,
  alterSituacao,
};
