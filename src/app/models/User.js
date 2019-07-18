module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    nome: DataTypes.STRING,
    matricula: DataTypes.STRING,
  });

  User.associate = (models) => {
    models.Votacao.belongsTo(models.User);
    models.Participacao.belongsTo(models.User);
  };

  return User;
};
