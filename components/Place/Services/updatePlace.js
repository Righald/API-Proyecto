  const dal = require("../PlaceDAL");
  
  module.exports = async ({ id }, img,
  { body, userData }, res) => {
	
	let status = 400;
  	let response = {
    	message: "Error al editar al lugar",
	    parameters: ["name", "image", "lat", "lon", "description", "userId"],
  	};

  	if(body.name && img && body.lat && body.lon && body.description) 
  	{
  		const fname = img.filename;
		
		dal.update({
	      name: body.name,
	      image: fname,
	      lat: body.lat,
	      lon: body.lon,
	      description: body.description,
	      userId: userData.id,
	  	}, {
	        where: {
	            id:id
	        }
	      }
	    );

        status = 200;
        response = {
          message: "Actualizado correctamente.",
        };
	}
	
	res.status(status).json(response);
};
  