const {
  createUser,
  getUserById,
  getUserByMatricula,
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
    const response = await createUser({ nome, matricula });
    return res.status(200).send({ data: response });
  } catch (err) {
    return next(err);
  }
}

async function findUser(req, res, next) {
  try {
    const { id } = req.params;
    const response = await getUserById(parseInt(id));
    return res.status(200).send({ data: response });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  signIn,
  addUser,
  findUser,
};
