const {
  createPonto,
  getPontoById,
  getAllPonto,
  getAllPontoByReuniaoId,
  getAllPontoBySituacaoId,
  upadatePonto,
} = require('../services/pontoServices');

async function addPonto(req, res, next) {
  try {
    const data = await createPonto(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findPontoById(req, res, next) {
  try {
    const data = await getPontoById(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllPonto(req, res, next) {
  try {
    const data = await getAllPonto();
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllPontoByReuniaoId(req, res, next) {
  try {
    const data = await getAllPontoByReuniaoId(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllPontoBySituacaoId(req, res, next) {
  try {
    const data = await getAllPontoBySituacaoId(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterPontoById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await upadatePonto({ id, ...req.body });
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterPonto(req, res, next) {
  try {
    const data = await upadatePonto(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  addPonto,
  findPontoById,
  findAllPonto,
  findAllPontoByReuniaoId,
  findAllPontoBySituacaoId,
  alterPontoById,
  alterPonto,
};
