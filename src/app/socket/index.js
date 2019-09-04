const {
  handleCreateRoom,
  handleJoinRoom,
  handleLeaveRoom,
  handleStartMeeting,
  handleNextTopic,
  handleStartVote,
} = require('./events');

const useListeners = (io) => {
  io.on('connection', (socket) => {
    socket.on('create_room', ({ secretaryId }) => handleCreateRoom(socket, secretaryId));
    socket.on('join_room', ({ userId }) => handleJoinRoom(socket, userId));
    socket.on('start_meeting', ({ secretaryId }) => handleStartMeeting(socket, secretaryId));
    socket.on('next_topic', ({ secretaryId }) => handleNextTopic(socket, secretaryId));
    socket.on('start_vote', ({ secretaryId }) => handleStartVote(socket, secretaryId));
    /* socket.on('quorum_count', () => handleParticipacaoCount(socket)); */
    socket.on('disconnect', () => handleLeaveRoom(socket));
  });
};

module.exports = {
  useListeners,
};
