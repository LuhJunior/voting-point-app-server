const { httpServer: app } = require('./app');

app.listen(8000, (err) => {
  if (err) throw err;
  console.log('Servidor rodando na porta 8000');
});
