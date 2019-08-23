const {
  app,
  httpServer,
  ioServer,
} = require('./app');

httpServer.listen(8000, (err) => {
  if (err) throw err;
  console.log('Servidor rodando na porta 8000');
});

ioServer.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('startMeeting', (data) => {
    console.log(data);
    socket.broadcast.emit('showPauta');
  });
});
