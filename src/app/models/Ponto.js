module.exports = (sequelize, DataTypes) => {
  const Ponto = sequelize.define('Ponto', {
    ponto: DataTypes.STRING,
    anexo: DataTypes.STRING,
  }, {
    tableName: 'ponto',
    underscored: true,
  });

  Ponto.associate = (models) => {
    models.Ponto.belongsTo(models.Reuniao);
    models.Ponto.belongsTo(models.Situacao);
    models.Ponto.belongsToMany(models.User, { as: 'Votos', through: models.Votacao });
  };

  return Ponto;
};
