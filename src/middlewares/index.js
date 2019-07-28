const checkAuth = require('./checkAuthMiddlewares');
const {
  logErrors,
  errorHandler,
  notFoundHandler,
} = require('./errorMiddlewares');

function useMiddlewares(app) {
  app.use(logErrors);
  app.use(errorHandler);
  app.use(notFoundHandler);
}

module.exports = {
  checkAuth,
  useMiddlewares,
};
