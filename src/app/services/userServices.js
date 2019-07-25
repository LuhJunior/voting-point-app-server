const { User } = require('../models');

async function createUser({ nome, matricula }) {
  try {
    const data = await User.create({ nome, matricula });
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}

async function getUserById(id) {
  try {
    const data = await User.findByPk(id);
    // console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}

async function getUserByMatricula(matricula) {
  try {
    const data = await User.findOne({
      where: {
        matricula
      },
      attributes: [
        'id',
        'nome',
        'matricula',
        'senha',
      ],
    });
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createUser,
  getUserById,
  getUserByMatricula,
};
