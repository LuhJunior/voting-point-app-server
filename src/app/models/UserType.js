module.exports = (sequelize, DataTypes) => {
  const UserType = sequelize.define('user_type', {
    tipo: DataTypes.STRING,
  });

  UserType.associate = (models) => {
    models.User.belongsTo(models.UserType);
  };

  return UserType;
};
