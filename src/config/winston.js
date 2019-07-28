const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new winston.transports.File({ filename: `log/${new Date().toDateString().replace(/\s/g, '_')}.log` }),
  ],
});


if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
  }));
}

module.exports = logger;
