function handleStartMeeting(socket) {
  socket.broadcast.emit('pauta');
}

module.exports = {
  handleStartMeeting,
};
