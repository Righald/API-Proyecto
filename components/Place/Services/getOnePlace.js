const dal = require("../PlaceDAL");

module.exports = async ({ id }, res) => {
	
	let status = 400;
	let response = {
		message: "Lugar inexistente.",
		parametros: ["id"],
	};
	
	const lugar = await dal.findOne({
		where: {
			id: id,
		},
	});
	
	if(lugar) 
	{
		status = 200;
		response = {
			place: lugar,
			message: "Query Exitoso",
		};
	}
	
	res.status(status).json(response);
};
