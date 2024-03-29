const {
  createReuniaoType,
  getReuniaoTypeById,
  getAllReuniaoType,
  updateReuniaoType,
} = require('../services/reuniaoTypeServices');

async function addReuniaoType(req, res, next) {
  try {
    const data = await createReuniaoType(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findReuniaoTypeById(req, res, next) {
  try {
    const data = await getReuniaoTypeById(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllReuniaoType(req, res, next) {
  try {
    const data = await getAllReuniaoType();
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterReuniaoTypeById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await updateReuniaoType({ id, ...req.body });
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterReuniaoType(req, res, next) {
  try {
    const data = await updateReuniaoType(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  addReuniaoType,
  findReuniaoTypeById,
  findAllReuniaoType,
  alterReuniaoTypeById,
  alterReuniaoType,
};
