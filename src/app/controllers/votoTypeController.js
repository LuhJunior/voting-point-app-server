const {
  createVotoType,
  getVotoTypeById,
  getAllVotoType,
  updateVotoType,
} = require('../services/votoTypeServices');

async function addVotacaoType(req, res, next) {
  try {
    const data = await createVotoType(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findVotoTypeById(req, res, next) {
  try {
    const data = await getVotoTypeById(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllVotoType(req, res, next) {
  try {
    const data = await getAllVotoType();
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterVotoTypeById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await updateVotoType({ id, ...req.body });
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterVotoType(req, res, next) {
  try {
    const data = await updateVotoType(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  addVotacaoType,
  findVotoTypeById,
  findAllVotoType,
  alterVotoTypeById,
  alterVotoType,
};
