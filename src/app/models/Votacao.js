module.exports = (sequelize, DataTypes) => {
  const Votacao = sequelize.define('votacao', {
    situacao: DataTypes.STRING,
  });

  Votacao.associate = (models) => {
    models.Ponto.belongsTo(models.Votacao);
  };

  return Votacao;
};
