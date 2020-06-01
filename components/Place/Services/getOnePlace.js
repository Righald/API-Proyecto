const dal = require("../PlaceDAL");
const path = require('path');
const express = require('express');
const app = express();

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
	
	
	//const path = "../../../uploads/" + lugar.image;
	//console.log(path);

	if(lugar) 
	{
		status = 200;
		return res.sendFile(path.resolve(path.resolve(__dirname+'../../../../uploads/'+lugar.image)));

		//return res.sendFile(__dirname + "../../../uploads/" + lugar.image);
	}
	
	res.status(status).json(response);
};
