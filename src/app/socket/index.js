const { handleStartMeeting } = require('./userSocket');

const useListeners = (io) => {
  io.on('connection', (socket) => {
    socket.on('StartMeeting', () => handleStartMeeting(socket));
  });
};

module.exports = {
  useListeners,
};
