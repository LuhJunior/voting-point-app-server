module.exports = (sequelize, DataTypes) => {

  const ReuniaoType = sequelize.define('ReuniaoType', {
    tipo: DataTypes.STRING,
  });

  ReuniaoType.associate = (models) => {
    models.Reuniao.belongsTo(models.ReuniaoType);
  };

  return ReuniaoType;
};
