module.exports = (sequelize, DataTypes) => {

  const VotoType = sequelize.define('VotoType', {
    tipo: DataTypes.STRING,
  });

  VotoType.associate = (models) => {
    models.Votacao.belongsTo(models.VotoType);
  };

  return VotoType;
};
