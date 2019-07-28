const { auth } = require('../services/authServices');

async function signIn(req, res, next) {
  try {
    return res.status(200).send({ ok: true, data: await auth(req.body) });
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  signIn,
};
