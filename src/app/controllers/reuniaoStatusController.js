const {
  createReuniaoStatus,
  getReuniaoStatusById,
  getAllReuniaoStatus,
  updateReuniaoStatus,
} = require('../services/reuniaoStatusServices');

async function addReuniaoStatus(req, res, next) {
  try {
    const data = await createReuniaoStatus(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findReuniaoStatusById(req, res, next) {
  try {
    const data = await getReuniaoStatusById(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllReuniaoStatus(req, res, next) {
  try {
    const data = await getAllReuniaoStatus();
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterReuniaoStatusById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await updateReuniaoStatus({ id, ...req.body });
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterReuniaoStatus(req, res, next) {
  try {
    const data = await updateReuniaoStatus(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  addReuniaoStatus,
  findReuniaoStatusById,
  findAllReuniaoStatus,
  alterReuniaoStatusById,
  alterReuniaoStatus,
};
