const {
  handleCreateRoom,
  handleCheckRoom,
  handleParticipacaoCount,
  handleJoinRoom,
  handleLeaveRoom,
  handleStartMeeting,
  handleNextTopic,
  handleStartVote,
  handleEndMeeting,
} = require('./events');

const useListeners = (io) => {
  io.on('connection', (socket) => {
    socket.on('create_room', ({ secretaryId }) => handleCreateRoom(socket, secretaryId));
    socket.on('join_room', ({ userId }) => handleJoinRoom(socket, userId));
    socket.on('check_room', () => handleCheckRoom(socket));
    socket.on('start_meeting', ({ secretaryId }) => handleStartMeeting(socket, secretaryId));
    socket.on('next_topic', ({ secretaryId, ponto }) => handleNextTopic(socket, secretaryId, ponto));
    socket.on('start_vote', ({ secretaryId }) => handleStartVote(socket, secretaryId));
    socket.on('end_meeting', ({ secretaryId }) => handleEndMeeting(socket, secretaryId));
    socket.on('quorum_count', () => handleParticipacaoCount(socket));
    socket.on('disconnect', () => handleLeaveRoom(socket));
  });
};

module.exports = {
  useListeners,
};
