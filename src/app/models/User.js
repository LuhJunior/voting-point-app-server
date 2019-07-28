module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nome: DataTypes.STRING,
    matricula: DataTypes.STRING,
    senha: DataTypes.STRING,
  }, {
    tableName: 'user',
    underscored: true,
  });

  User.associate = (models) => {
    models.User.belongsTo(models.UserType);
    models.User.belongsToMany(models.Reuniao, { through: models.Participacao });
    models.User.belongsToMany(models.Ponto, { through: models.Votacao });
  };

  return User;
};
