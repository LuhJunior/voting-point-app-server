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
    return UserType.update({ tipo }, { where: { id } });
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
