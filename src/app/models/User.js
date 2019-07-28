module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    nome: DataTypes.STRING,
    matricula: DataTypes.STRING,
    senha: DataTypes.STRING,
  });

  User.associate = (models) => {
    models.Votacao.belongsTo(models.User);
    models.Participacao.belongsTo(models.User);
  };

  return User;
};
