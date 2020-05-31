  const dal = require("../PlaceDAL");
  
  module.exports = async ({ id }, img,
  { name, lat, lon, description, userId, qualification }, res) => {
	
	let status = 400;
  	let response = {
    	message: "Error al editar al lugar",
	    parameters: ["name", "image", "lat", "lon", "description", "userId"],
  	};

  	const fname = img.filename;

  	if(id && name && img && lat && lon && description) 
  	{
		dal.update({
		    name:name, 
		    image:fname, 
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
  