const Sequelize = require('sequelize');
const {
  database,
  user,
  password,
  host,
} = require('../../config');

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: 'mysql',
});

const models = {
  User: sequelize.import('./User'),
  UserType: sequelize.import('./UserType'),
  Votacao: sequelize.import('./Votacao'),
  VotoType: sequelize.import('./VotoType'),
  Situacao: sequelize.import('./Situacao'),
  Reuniao: sequelize.import('./Reuniao'),
  ReuniaoType: sequelize.import('./ReuniaoType'),
  Pontos: sequelize.import('./Pontos'),
  Participacao: sequelize.import('./Participacao'),
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

module.exports = {
  ...models,
  sequelize,
  Sequelize,
};
