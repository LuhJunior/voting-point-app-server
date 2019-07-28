module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('UserType', {
    tipo: DataTypes.STRING,
  }, {
    tableName: 'user_type',
    underscored: true,
  });

  UserType.associate = (models) => {
    models.UserType.hasMany(models.User);
  };

  return UserType;
};
