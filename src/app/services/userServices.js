const bcrypt = require('bcrypt');
const { User, UserType } = require('../models');

async function createUser({
  nome, matricula, senha, user_type_id: UserTypeId,
}) {
  try {
    const data = await User.create({
      nome, matricula, senha: await bcrypt.hash(senha, 123654), UserTypeId,
    });
    return data;
  } catch (err) {
    throw err;
  }
}

async function getUserById(id) {
  try {
    const data = await User.findByPk(id, {
      attributes: [
        'nome',
        'matricula',
        // 'senha',
      ],
      include: [{
        model: UserType,
        attributes: ['tipo'],
      }],
    });
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
      include: [{
        model: UserType,
        attributes: ['tipo'],
      }],
    });
    return data;
  } catch (err) {
    throw err;
  }
}


async function updateUser({ id, where, ...fields }) {
  try {
    if (id) return await User.update({ ...fields }, { where: { id } });
    if (where) return await User.update({ ...fields }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
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
