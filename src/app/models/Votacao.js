module.exports = (sequelize, DataTypes) => {

  const Votacao = sequelize.define('Votacao', {
    situacao: DataTypes.STRING,
  });

  Votacao.associate = (models) => {
    models.Pontos.belongsTo(models.Votacao);
  };

  return Votacao;
};

