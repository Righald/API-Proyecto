/*

*/
const dal = require("../PlaceDAL");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../../../libs/jwtConfig");

module.exports = async(req, res) => {

	const lugares = await dal.findAll();

	res.status(200).json({
		places: lugares,
		message: "Query Exitoso",
	});

};
