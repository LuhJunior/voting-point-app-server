module.exports = (sequelize, DataTypes) => {
  const Participacao = sequelize.define('Participacao', {
    chegada: DataTypes.DATE,
  }, {
    tableName: 'participacao',
    underscored: true,
  });

  Participacao.associate = (models) => {
    models.Participacao.belongsTo(models.User);
    models.Participacao.belongsTo(models.Reuniao);
  };

  return Participacao;
};
