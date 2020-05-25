"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
    },
    {}
  );
  User.associate = function (models) {
    // hasMany
    User.hasMany(models.Place);
  };
  return User;
};
