const dal = require("../RatingDAL");
const sequelize = require('sequelize');

module.exports = async ({ id }, res) => {
	
	//console.log(id);

	let status = 400;
	let response = {
		message: "Lugar inexistente.",
		parametros: ["id"],
	};
	
	const rating = await dal.findAll({
		attributes: [[sequelize.fn('count', sequelize.col('rating')), 'count'],
		[sequelize.fn('sum', sequelize.col('rating')), 'suma'],
		],
		where: {
			place_id: id,
		},
	});
	
	if(rating) 
	{
		status = 200;
		response = {
			calificacion: rating,
			message: "Query Exitoso",
		};
	}
	
	res.status(status).json(response);
};
