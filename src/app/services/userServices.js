const { User } = require('../models');

async function createUser({ nome, matricula, user_type_id: uTypeId }) {
  try {
    const data = await User.create({ nome, matricula, user_type_id: uTypeId });
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
        matricula,
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


async function updateUser({ id, matricula, nome }) {
  try {
    return await User.update({ matricula, nome }, { where: { id } });
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createUser,
  getUserById,
  getUserByMatricula,
  updateUser,
};
