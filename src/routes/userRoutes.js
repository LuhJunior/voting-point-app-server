const Router = require('express').Router();
const {
  signIn,
  addUser,
  findUserById,
  findUserByMatricula,
  alterUser,
  alterUserById,
} = require('../app/controllers/userController');
const auth = require('../middlewares/authMiddlewares');

Router.post('/sign_in', signIn);

Router.post('/', auth, addUser);

Router.get('/', auth, findUserByMatricula);
Router.get('/:id', auth, findUserById);

Router.put('/', auth, alterUser);
Router.put('/:id', auth, alterUserById);

module.exports = Router;
