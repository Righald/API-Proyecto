const dal = require("../RatingDAL");
const udal = require("../../Users/UserDAL");

module.exports = async ({ user_id, place_id, rating }, res) => {
	
	let status = 400;
	let response = {
		message: "Error al enviar parametros.",
		parametros: ["user_id", "place_id", "rating"],
	};

	const exists = await dal.findAll({
		attributes: ['id'],
		where: {
			user_id: user_id,
			place_id: place_id,
		},
	});

	if(exists)
	{
		console.log("entró al exists");
		status = 400;
		
		response = {
	      	message: "El Usuario ya calificó este lugar.",
	    };
	}

	if(user_id && place_id && rating && exists.length == 0) 
	{
		console.log("Entro al create");
	    dal.create({
	      user_id,
	      place_id,
	      rating,
	    });
	    
		status = 200;
		
		response = {
	      message: "Calificación enviada",
	    };
  	}

	res.status(status).json(response);
};
