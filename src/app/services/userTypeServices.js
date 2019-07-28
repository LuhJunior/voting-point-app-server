const { UserType } = require('../models');

async function createUserType({ tipo }) {
  try {
    return await UserType.create({ tipo });
  } catch (e) {
    throw e;
  }
}

async function getUserType(id) {
  try {
    return await UserType.findByPk(id, {
      attributes: ['tipo'],
    });
  } catch (e) {
    throw e;
  }
}

async function getAllUserType() {
  try {
    return await UserType.findAll({ attributes: ['id', 'tipo'] });
  } catch (e) {
    throw e;
  }
}

async function updateUserType({ id, tipo, where }) {
  try {
    if (id) return await UserType.update({ tipo }, { where: { id } });
    if (where) return await UserType.update({ tipo }, { where });
    const e = new Error('No where clauses on update');
    e.isOperational = true;
    e.code = 400;
    throw e;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  createUserType,
  getUserType,
  getAllUserType,
  updateUserType,
};
