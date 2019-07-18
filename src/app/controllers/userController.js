const {
  createUser,
  getUser
} = require('../services/userServices');

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
    const response = await getUser(id);
    return res.status(200).send({ data: response });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  addUser,
  findUser,
};
