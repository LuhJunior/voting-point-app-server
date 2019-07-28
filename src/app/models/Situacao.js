module.exports = (sequelize, DataTypes) => {
  const Situacao = sequelize.define('Situacao', {
    descricao: DataTypes.STRING,
  }, {
    tableName: 'situacao',
    underscored: true,
  });

  Situacao.associate = (models) => {
    models.Situacao.hasMany(models.Ponto);
  };

  return Situacao;
};
