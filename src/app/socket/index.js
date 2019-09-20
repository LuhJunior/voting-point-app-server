const {
  handleEtapa,
  handleCreateRoom,
  handleCheckRoom,
  handleParticipacaoCount,
  handleJoinRoom,
  handleLeaveRoom,
  handleVotingTime,
  handleStartMeeting,
  handleNextTopic,
  handleStartVote,
  handleVotationResult,
  handleEndMeeting,
  handleRecoverMeeting,
} = require('./events');

const useListeners = (io) => {
  io.on('connection', (socket) => {
    socket.on('etapa', ({ id, tipo, reuniaoId }) => handleEtapa(socket, id, tipo, reuniaoId));
    socket.on('create_room', ({ secretaryId, reuniaoId }) => handleCreateRoom(socket, secretaryId, reuniaoId));
    socket.on('join_room', ({ userId }) => handleJoinRoom(socket, userId));
    socket.on('check_room', () => handleCheckRoom(socket));
    socket.on('start_meeting', ({ secretaryId }) => handleStartMeeting(socket, secretaryId));
    socket.on('voting_time', () => handleVotingTime(socket));
    socket.on('next_topic', ({ secretaryId, ponto }) => handleNextTopic(socket, secretaryId, ponto));
    socket.on('start_vote', ({ secretaryId }) => handleStartVote(socket, secretaryId));
    socket.on('votation_result', ({ secretaryId }) => handleVotationResult(socket, secretaryId));
    socket.on('end_meeting', ({ secretaryId }) => handleEndMeeting(socket, secretaryId));
    socket.on('quorum_count', () => handleParticipacaoCount(socket));
    socket.on('recover_meeting', () => handleRecoverMeeting(socket));
    socket.on('disconnect', () => handleLeaveRoom(socket));
  });
};

module.exports = {
  useListeners,
};
