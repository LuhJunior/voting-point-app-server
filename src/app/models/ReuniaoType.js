module.exports = (sequelize, DataTypes) => {
  const ReuniaoType = sequelize.define('ReuniaoType', {
    tipo: DataTypes.STRING,
  }, {
    tableName: 'reuniao_type',
    underscored: true,
  });

  ReuniaoType.associate = (models) => {
    models.ReuniaoType.hasMany(models.Reuniao);
  };

  return ReuniaoType;
};
