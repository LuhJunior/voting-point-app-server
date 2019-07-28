module.exports = (sequelize, DataTypes) => {
  const VotoType = sequelize.define('voto_type', {
    tipo: DataTypes.STRING,
  });

  VotoType.associate = (models) => {
    models.Votacao.belongsTo(models.VotoType);
  };

  return VotoType;
};
