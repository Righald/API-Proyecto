/*

*/
const dal = require("../PlaceDAL");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../../../libs/jwtConfig");

module.exports = async(req, res) => {
	
	const lugares = await dal.findAll();

	console.log(req.headers["authorization"]);

	if(req.headers["authorization"] != undefined)
	{
	  	try 
	  	{
    		const user = jwt.verify(req.headers["authorization"], jwtConfig.privateKey);
    		req.userData = user;

			const userplaces = await dal.findAll({
				where: {
					userId: user.id,
				},
			});

    		res.status(200).json({
    			places: lugares,
    			userPlaces: userplaces,
      			message: "Sesión Activa",
    		});
    	
		} 
		catch (err) 
		{
    		res.status(200).json({
    			places: lugares,
      			message: "Sesión Inválida",
    		});
  		}
	}
	else
	{
		res.status(200).json({
			places: lugares,
			message: "Sin Usuario Autentificado",
		});
	}
};