module.exports = (sequelize, DataTypes) => {
  const Reuniao = sequelize.define('Reuniao', {
    data: DataTypes.DATEONLY,
    hora_inicio: DataTypes.TIME,
    hora_fim: DataTypes.TIME,
  }, {
    tableName: 'reuniao',
    underscored: true,
  });

  Reuniao.associate = (models) => {
    models.Reuniao.belongsTo(models.ReuniaoType);
    models.Reuniao.hasMany(models.Ponto, { as: 'Ponto' });
    models.Reuniao.belongsToMany(models.User, { through: models.Participacao });
  };

  return Reuniao;
};
