const dal = require("../PlaceDAL");

module.exports = ({id}, res) => {
  
	if(id) 
	{
		dal.destroy({ 
			where: { 
	     	id:id,
    		} 
		});

		res.status(200).json({
		  message: "Lugar eliminado",
		});
	}
	else
	{
	    res.status(400).json({
        	message: "Parametros Incorrectos",
        	parameters: ["id"]
    	});
	}
  

};