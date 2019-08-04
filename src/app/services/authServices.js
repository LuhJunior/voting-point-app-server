const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwt_secret: jSecret } = require('../../config');
const { getUserByMatricula } = require('./userServices');


async function auth({ matricula, senha }) {
  try {
    const data = await getUserByMatricula(matricula);
    if (data === null) {
      const e = new Error('Usuário não existe');
      e.isOperational = true;
      e.code = 400;
      throw e;
    }
    const { id, senha: userPass } = data;
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
