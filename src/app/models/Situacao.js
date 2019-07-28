module.exports = (sequelize, DataTypes) => {
  const Situacao = sequelize.define('situacao', {
    descricao: DataTypes.STRING,
  });

  Situacao.associate = (models) => {
    models.Ponto.belongsTo(models.Situacao);
  };

  return Situacao;
};
