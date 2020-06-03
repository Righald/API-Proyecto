"use strict";
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define(
    "Place",
    {
      name: DataTypes.STRING,
      image: DataTypes.TEXT,
      lat: DataTypes.STRING,
      lon: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Place.associate = function (models) {
    // belogsTo
    Place.belongsTo(models.User);
    Place.hasMany(models.Rating);
  };
  return Place;
};
