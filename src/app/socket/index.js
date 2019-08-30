const {
  handleStartMeeting,
  handleParticipacaoCount,
} = require('./userSocket');

const useListeners = (io) => {
  io.on('connection', (socket) => {
    socket.on('StartMeeting', () => handleStartMeeting(socket));
    socket.on('quorum_count', () => handleParticipacaoCount(socket));
  });
};

module.exports = {
  useListeners,
};
