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

async function getUser({ id }) {
  try {
    const data = await User.find({ id });
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createUser,
  getUser,
};
