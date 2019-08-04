module.exports = (sequelize, DataTypes) => {
  const Reuniao = sequelize.define('Reuniao', {
    data: DataTypes.DATE,
    anexo: DataTypes.STRING,
  }, {
    tableName: 'reuniao',
    underscored: true,
  });

  Reuniao.associate = (models) => {
    models.Reuniao.belongsTo(models.ReuniaoType);
    models.Reuniao.hasMany(models.Ponto);
    models.Reuniao.belongsToMany(models.User, { through: models.Participacao });
  };

  return Reuniao;
};
