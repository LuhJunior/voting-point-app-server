const {
  handleCreateRoom,
  handleJoinRoom,
  handleLeaveRoom,
  handleStartMeeting,
  handleParticipacaoCount,
} = require('./events');

const useListeners = (io) => {
  io.on('connection', (socket) => {
    socket.on('create_room', ({ secretaryId }) => handleCreateRoom(socket, secretaryId));
    socket.on('join_room', ({ userId }) => handleJoinRoom(socket, userId));
    socket.on('start_meeting', () => handleStartMeeting(socket));
    socket.on('quorum_count', () => handleParticipacaoCount(socket));
    socket.on('disconnect', () => handleLeaveRoom(socket));
  });
};

module.exports = {
  useListeners,
};
