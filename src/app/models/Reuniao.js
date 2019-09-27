module.exports = (sequelize, DataTypes) => {
  const Reuniao = sequelize.define('Reuniao', {
    titulo: DataTypes.STRING,
    data: DataTypes.DATEONLY,
    hora_inicio: DataTypes.TIME,
    hora_segunda_chamada: DataTypes.TIME,
  }, {
    tableName: 'reuniao',
    underscored: true,
  });

  Reuniao.associate = (models) => {
    models.Reuniao.belongsTo(models.ReuniaoType);
    models.Reuniao.belongsTo(models.ReuniaoStatus);
    models.Reuniao.hasMany(models.Ponto, { as: 'Ponto' });
    models.Reuniao.belongsToMany(models.User, { through: models.Participacao });
  };

  return Reuniao;
};
