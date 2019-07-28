module.exports = (sequelize, DataTypes) => {
  const VotoType = sequelize.define('VotoType', {
    tipo: DataTypes.STRING,
  }, {
    tableName: 'voto_type',
    underscored: true,
  });

  VotoType.associate = (models) => {
    models.VotoType.hasMany(models.Votacao);
  };

  return VotoType;
};
