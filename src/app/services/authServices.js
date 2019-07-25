const jwt = require('jsonwebtoken');
const { jwt_secret } = require('../../config');
const { getUserByMatricula } = require('./userServices');


async function auth({ matricula, senha }) {
  try {
    const { id, senha: userPass } = await getUserByMatricula(matricula);
    if (senha === userPass) {
      return jwt.sign({ id }, jwt_secret);
    } else {
      const err = new Error('Senha inválida');
      err.isOperational = true;
      err.code = 400;
      throw err;
    }
  } catch (err) {
    throw err;
  }
}

module.exports = {
  auth,
};
