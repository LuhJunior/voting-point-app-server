const {
  createPonto,
  getPontoById,
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
    const { id } = req.params;
    const data = await getPontoById(parseInt(id, 10));
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllPontoByReuniaoId(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getAllPontoByReuniaoId(parseInt(id, 10));
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllPontoBySituacaoId(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getAllPontoBySituacaoId(parseInt(id, 10));
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
  findAllPontoByReuniaoId,
  findAllPontoBySituacaoId,
  alterPonto,
};
