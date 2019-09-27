module.exports = (sequelize, DataTypes) => {
  const ReuniaoStatus = sequelize.define('ReuniaoStatus', {
    descricao: DataTypes.STRING,
  }, {
    tableName: 'reuniao_status',
    underscored: true,
  });

  ReuniaoStatus.associate = (models) => {
    models.ReuniaoStatus.hasMany(models.Reuniao);
  };

  return ReuniaoStatus;
};
