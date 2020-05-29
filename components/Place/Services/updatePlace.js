  const dal = require("../PlaceDAL");
  
  module.exports = async ({ id },
  { name, lat, lon, image,description, userId, qualification }, res) => {
	
	let status = 400;
  	let response = {
    	message: "Error al editar al lugar",
	    parameters: ["name", "image", "lat", "lon", "description", "userId"],
  	};

  	console.log(image);

  	if(id && name && image && lat && lon && description) 
  	{
		dal.update({
		    name:name, 
		    image:image, 
		    lat:lat, 
		    lon:lon, 
		    description:description,
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
  