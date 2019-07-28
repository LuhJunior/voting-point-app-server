const {
  createUser,
  getUserById,
  getUserByMatricula,
  updateUser,
} = require('../services/userServices');

async function addUser(req, res, next) {
  try {
    const { nome, matricula } = req.body;
    const data = await createUser({ nome, matricula });
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function findUserById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await getUserById(parseInt(id, 10));
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function findUserByMatricula(req, res, next) {
  try {
    const { matricula } = req.query;
    const data = await getUserByMatricula(matricula);
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}

async function alterUserById(req, res, next) {
  try {
    const { id } = req.params;
    const data = await updateUser({ id: parseInt(id, 10), ...req.body });
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
};
