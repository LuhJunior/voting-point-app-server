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

function handleStartMeeting(socket, secretaryId) {
  if (room && room.leader.secretaryId === secretaryId) {
    socket.broadcast.emit('start_meeting');
    socket.emit('start_meeting');
  }
}

function handleNextTopic(socket, secretaryId) {
  if (room && room.leader.secretaryId === secretaryId) {
    socket.broadcast.emit('next_topic');
    socket.emit('next_topic');
  }
}

function handleStartVote(socket, secretaryId) {
  if (room && room.leader.secretaryId === secretaryId) {
    socket.broadcast.emit('start_vote');
  }
}

function handleParticipacaoCount(socket) {
  if (room) socket.broadcast.emit('quorum_count', { count: room.countMembers() });
}

module.exports = {
  handleCreateRoom,
  handleJoinRoom,
  handleLeaveRoom,
  handleStartMeeting,
  handleNextTopic,
  handleStartVote,
  handleParticipacaoCount,
};
