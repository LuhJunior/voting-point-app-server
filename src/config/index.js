const logger = require('./winston');

module.exports = {
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  host: process.env.DATABASE_HOST,
  jwt_secret: process.env.JWT_SECRET,
  logger,
};
