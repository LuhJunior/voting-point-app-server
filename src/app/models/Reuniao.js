module.exports = (sequelize, DataTypes) => {
  const Reuniao = sequelize.define('reuniao', {
    data: DataTypes.DATE,
  });

  Reuniao.associate = (models) => {
    models.Participacao.belongsTo(models.Reuniao);
  };

  return Reuniao;
};
