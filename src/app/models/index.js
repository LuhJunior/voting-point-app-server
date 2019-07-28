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
  ReuniaoType: sequelize.import('./ReuniaoType'),
  Reuniao: sequelize.import('./Reuniao'),
  Situacao: sequelize.import('./Situacao'),
  Ponto: sequelize.import('./Ponto'),
  Participacao: sequelize.import('./Participacao'),
  VotoType: sequelize.import('./VotoType'),
  Votacao: sequelize.import('./Votacao'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// sequelize.sync();

module.exports = {
  ...models,
  sequelize,
  Sequelize,
};
