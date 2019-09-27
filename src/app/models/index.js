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
  Origem: sequelize.import('./Origem'),
  UserType: sequelize.import('./UserType'),
  User: sequelize.import('./User'),
  ReuniaoType: sequelize.import('./ReuniaoType'),
  ReuniaoStatus: sequelize.import('./ReuniaoStatus'),
  Reuniao: sequelize.import('./Reuniao'),
  Situacao: sequelize.import('./Situacao'),
  Participacao: sequelize.import('./Participacao'),
  VotoType: sequelize.import('./VotoType'),
  Votacao: sequelize.import('./Votacao'),
  Ponto: sequelize.import('./Ponto'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

// sequelize.sync({ alter: true });

module.exports = {
  ...models,
  sequelize,
  Sequelize,
};
