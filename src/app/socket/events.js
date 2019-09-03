const { createRoom } = require('./roomUtils');

let room = null;

async function handleCreateRoom(socket, secretaryId) {
  if (room && room.leader.secretaryId === secretaryId) {
    room.leader.socketId = socket.id;
    socket.emit('quorum_count', { count: room.countMembers() });
  } else {
    room = await createRoom(secretaryId, socket.id);
  }
}

function handleJoinRoom(socket, userId) {
  if (room) {
    room.addMember(socket.id, userId);
    socket.to(room.leader.socketId).emit('quorum_count', { count: room.countMembers() });
  }
}

function handleLeaveRoom(socket) {
  if (room) {
    room.removeMember(socket.id);
    socket.to(room.leader.socketId).emit('quorum_count', { count: room.countMembers() });
  }
}

function handleStartMeeting(socket) {
  socket.broadcast.emit('pauta');
}

function handleParticipacaoCount(socket) {
  if (room) socket.broadcast.emit('quorum_count', { count: room.countMembers() });
}

module.exports = {
  handleCreateRoom,
  handleJoinRoom,
  handleLeaveRoom,
  handleStartMeeting,
  handleParticipacaoCount,
};
