const { logger } = require('../config');

function logErrors(err, req, res, next) {
  logger.log({
    level: 'error',
    message: [
      `method: ${req.method} - url: ${req.originalUrl} - ip: ${req.ip}`,
      `  user_id: ${req.user_id}`,
      `  body: ${JSON.stringify(req.body)}`,
      `  errCode: ${err.code} - errMessage: ${err.message} - isOperational: ${err.isOperational}`,
    ].join('\n'),
  });
  next(err);
}

function errorHandler(err, req, res, next) {
  if (err.isOperational) {
    res.status(err.code).send({ error: err.message });
  } else {
    res.status(500).send({ error: 'Ocorreu um erro' });
  }
}

function notFoundHandler(req, res) {
  res.status(404).send({ message: 'Chora' });
}

module.exports = {
  logErrors,
  errorHandler,
  notFoundHandler,
};
