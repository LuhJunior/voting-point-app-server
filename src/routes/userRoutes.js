const Router = require('express').Router();
const {
  signIn,
  addUser,
  findUser
} = require('../app/controllers/userController');
const auth = require('../middlewares/auth');

Router.post('/sign_in', signIn);

Router.post('/', auth, addUser);

Router.get('/:id', auth, findUser);

module.exports = Router;
