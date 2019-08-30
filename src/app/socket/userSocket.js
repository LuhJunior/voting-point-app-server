function handleStartMeeting(socket) {
  socket.broadcast.emit('pauta');
}

function handleParticipacaoCount(socket) {
  socket.broadcast.emit('quorum_count');
}

module.exports = {
  handleStartMeeting,
  handleParticipacaoCount,
};
