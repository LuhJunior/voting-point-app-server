module.exports = (sequelize, DataTypes) => {
  const Votacao = sequelize.define('Votacao', {
    secreto: DataTypes.BOOLEAN,
  }, {
    tableName: 'votacao',
    underscored: true,
  });

  Votacao.associate = (models) => {
    models.Votacao.belongsTo(models.User);
    models.Votacao.belongsTo(models.Ponto);
    models.Votacao.belongsTo(models.VotoType);
  };

  return Votacao;
};
