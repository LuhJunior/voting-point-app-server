const {
  createUser,
  getUserById,
  getUserByMatricula,
  updateUser,
  createUserType,
  getUserType,
  getAllUserType,
  updateUserType,
} = require('../services/userServices');

const { auth } = require('../services/authServices');

async function signIn(req, res, next){
  try {
    res.status(200).send({ ok: true, data: await auth(req.body) });
  } catch (err) {
    return next(err);
  }
}

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
    const data = await getUserById(parseInt(id));
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
    const data = await updateUser({ id: parseInt(id), ...req.body });
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
    const data = await updateUserType({ id: parseInt(id), ...req.body});
    return res.status(200).send({ ok: true, data });
  } catch (err) {
    return next(err);
  }
}





module.exports = {
  signIn,
  addUser,
  findUserById,
  findUserByMatricula,
  alterUser,
  alterUserById,
  addUserType,
  findUserTypeById,
  findAllUserType,
  alterUserType,
  alterUserTypeById,
};
