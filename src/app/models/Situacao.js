module.exports = (sequelize, DataTypes) => {

  const Situacao = sequelize.define('Situacao', {
    descricao: DataTypes.STRING,
  });

  Situacao.associate = (models) => {
    models.Pontos.belongsTo(models.Situacao);
  };

  return Situacao;
};
