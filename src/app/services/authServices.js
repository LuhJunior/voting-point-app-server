const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwt_secret: jSecret } = require('../../config');
const { getUserByMatricula } = require('./userServices');


async function auth({ matricula, senha }) {
  try {
    const { id, senha: userPass } = await getUserByMatricula(matricula);
    if (await bcrypt.compare(senha, userPass)) return jwt.sign({ id }, jSecret);

    const e = new Error('Senha inválida');
    e.isOperational = true;
    e.code = 400;
    throw e;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  auth,
};
