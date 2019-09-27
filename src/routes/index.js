const { checkAuth } = require('../middlewares');
const signIn = require('./authRoutes');
const users = require('./userRoutes');
const userType = require('./userTypeRoutes');
const participacao = require('./participacaoRoutes');
const ponto = require('./pontoRoutes');
const situacao = require('./situacaoRoutes');
const reuniao = require('./reuniaoRoutes');
const reuniaoType = require('./reuniaoTypeRoutes');
const reuniaoStatus = require('./reuniaoStatusRoutes');
const votacao = require('./votacaoRoutes');
const votoType = require('./votoTypeRoutes');

function useRoutes(app) {
  app.use('/sign_in', signIn);
  app.use('/users', users);
  app.use('/user_type', userType);
  app.use('/participacao', checkAuth, participacao);
  app.use('/ponto', checkAuth, ponto);
  app.use('/situacao', checkAuth, situacao);
  app.use('/reuniao', checkAuth, reuniao);
  app.use('/reuniao_type', checkAuth, reuniaoType);
  app.use('/reuniao_status', checkAuth, reuniaoStatus);
  app.use('/votacao', checkAuth, votacao);
  app.use('/voto_type', checkAuth, votoType);
}

module.exports = useRoutes;
