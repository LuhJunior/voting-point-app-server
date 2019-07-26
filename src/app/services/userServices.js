const { User, UserType } = require('../models');

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


async function updateUser({ matricula, nome }) {
  try {
    return await User.update({ matricula, nome });
  } catch (e) {
    throw e;
  }
}

async function createUserType({ tipo }) {
  try {
    return await UserType.create({ tipo });
  } catch (e) {
    throw e;
  }
}

async function getUserType(id) {
  try {
    return await UserType.findByPk(id);
  } catch (e) {
    throw e;
  }
}

async function getAllUserType() {
  try {
    return await UserType.findAll();
  } catch (e) {
    throw e;
  }
}

async function updateUserType({ id, tipo }) {
  try {
    return UserType.update({ tipo });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createUser,
  getUserById,
  getUserByMatricula,
  updateUser,
  createUserType,
  getUserType,
  getAllUserType,
  updateUserType
};
