const {
  createReuniao,
  getReuniaoById,
  getAllReuniao,
  getCurrentReuniao,
  updateReuniao,
  updateReuniaoStatus,
  deleteReuniaoById,
} = require('../services/reuniaoServices');
const { getReuniaoStatusByDescricao } = require('../services/reuniaoStatusServices');

async function addReuniao(req, res, next) {
  try {
    const data = await createReuniao(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findReuniaoById(req, res, next) {
  try {
    const data = await getReuniaoById(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findAllReuniao(req, res, next) {
  try {
    const data = await getAllReuniao();
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function findCurrentReuniao(req, res, next) {
  try {
    const data = await getCurrentReuniao();
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterReuniaoById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await updateReuniao({ id, ...req.body });
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterReuniaoStatusById(req, res, next) {
  try {
    const { id } = req.params;
    const { descricao } = req.body;
    const { id: statusId } = await getReuniaoStatusByDescricao(descricao);
    const data = await updateReuniaoStatus({ id, reuniao_status_id: statusId });
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function alterReuniao(req, res, next) {
  try {
    const data = await updateReuniao(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

async function removeReuniaoById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await deleteReuniaoById(id);
    return res.status(200).send({ ok: true, data });
  } catch (e) {
    return next(e);
  }
}

module.exports = {
  addReuniao,
  findReuniaoById,
  findAllReuniao,
  findCurrentReuniao,
  alterReuniaoById,
  alterReuniaoStatusById,
  alterReuniao,
  removeReuniaoById,
};
