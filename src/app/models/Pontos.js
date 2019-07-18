module.exports = (sequelize, DataTypes) => {

  const Pontos = sequelize.define('Pontos', {
    ponto: DataTypes.STRING,
  });

  Pontos.associate = (models) => {
    models.Reuniao.belongsTo(models.Pontos);
  };

  return Pontos;
};

