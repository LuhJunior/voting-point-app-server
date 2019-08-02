module.exports = (sequelize, DataTypes) => {
  const Origem = sequelize.define('Origem', {
    nome: DataTypes.STRING,
  }, {
    tableName: 'origem',
    underscored: true,
  });

  Origem.associate = (models) => {
    models.Origem.hasMany(models.User);
  };

  return Origem;
};
