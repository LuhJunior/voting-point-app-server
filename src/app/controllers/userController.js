const {
  createUser,
  getUserById,
  getUserByMatricula,
  getAllUser,
  updateUser,
} = require('../services/userServices');

async function addUser(req, res, next) {
  try {
    const data = await createUser(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function findUserById(req, res, next) {
  try {
    const data = await getUserById(req.params.id);
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function findUserByMatricula(req, res, next) {
  try {
    const { matricula } = req.query;
    if (matricula) {
      const data = await getUserByMatricula(matricula);
      return res.status(200).send({ ok: true, data });
    }
    const e = new Error('No matricula field on query params');
    e.isOperational = true;
    e.code = 400;
    throw e;
  } catch (err) {
    return next(err);
  }
}

async function findAllUser(req, res, next) {
  try {
    const data = await getAllUser();
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function alterUserById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await updateUser({ id, ...req.body });
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function alterUser(req, res, next) {
  try {
    const data = await updateUser(req.body);
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  addUser,
  findUserById,
  findUserByMatricula,
  alterUser,
  alterUserById,
  findAllUser,
};
