const {
  createUserType,
  getUserType,
  getAllUserType,
  updateUserType,
} = require('../services/userTypeServices');

async function addUserType(req, res, next) {
  try {
    const data = await createUserType(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function findUserTypeById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getUserType(id);
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function findAllUserType(req, res, next) {
  try {
    const data = await getAllUserType();
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function alterUserType(req, res, next) {
  try {
    const data = await updateUserType(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function alterUserTypeById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await updateUserType({ id: parseInt(id, 10), ...req.body });
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  addUserType,
  findUserTypeById,
  findAllUserType,
  alterUserType,
  alterUserTypeById,
};
