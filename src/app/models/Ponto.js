module.exports = (sequelize, DataTypes) => {
  const Ponto = sequelize.define('ponto', {
    ponto: DataTypes.STRING,
  });

  Ponto.associate = (models) => {
    models.Reuniao.belongsTo(models.Ponto);
  };

  return Ponto;
};
