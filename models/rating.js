'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
  	'Rating',
  	{
	    user_id: DataTypes.INTEGER,
	    place_id: DataTypes.INTEGER,
	    rating: DataTypes.DOUBLE
  	}, 
  	{}
  );
  Rating.associate = function(models) 
  {
    // associations can be defined here
    Rating.belongsTo(models.User);
    Rating.belongsTo(models.Place);
  };
  return Rating;
};