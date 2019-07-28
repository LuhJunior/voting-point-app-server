const jwt = require('jsonwebtoken');
const { jwt_secret: jSecret } = require('../config');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization === undefined) res.status(401).send({ ok: false, data: 'no token provided' });
    const [bearer, token] = authorization.split(' ');
    const { id } = jwt.verify(token, jSecret);
    req.user_id = id;
    return next();
  } catch (err) {
    return res.status(401).send({ ok: false, data: 'token invalid' });
  }
};
