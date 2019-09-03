const Room = require('./Room');
const { getUserById } = require('../services/userServices');

async function createRoom(secretaryId, socketId) {
  const user = await getUserById(secretaryId);
  if (user.UserType.tipo === 'Administrador') return new Room(secretaryId, socketId);
  return null;
}

module.exports = {
  createRoom,
};
