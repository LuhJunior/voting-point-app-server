const Sequelize = require('sequelize');
const {
  database,
  user,
  password,
  host,
} = require('../../config');

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect: 'mysql',
});

const models = {
  UserType: sequelize.import('./UserType'),
  User: sequelize.import('./User'),
  VotoType: sequelize.import('./VotoType'),
  Votacao: sequelize.import('./Votacao'),
  Situacao: sequelize.import('./Situacao'),
  Ponto: sequelize.import('./Ponto'),
  ReuniaoType: sequelize.import('./ReuniaoType'),
  Reuniao: sequelize.import('./Reuniao'),
  Participacao: sequelize.import('./Participacao'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

/* Object.keys(models).forEach((name) => {
  models[name].sync({ alter: true });
}); */

module.exports = {
  ...models,
  sequelize,
  Sequelize,
};
