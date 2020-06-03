/*
  Esta función crea un nuevo lugar en la base de datos.
  @param [object] data
  @param [string] data.name
  @param [string] data.image
  @param [string] data.lat
  @param [string] data.lon
  @param [string] data.description
*/
const dal = require("../PlaceDAL");

module.exports = (img, {body, userData}, res) => {
  console.log(userData.id);

  if (body.name && img && body.lat && body.lon && body.description) {
      const fname = img.filename;
      
      dal.create({
      name: body.name,
      image: fname,
      lat: body.lat,
      lon: body.lon,
      description: body.description,
      userId: userData.id,
    });
    
    res.status(200).json({
      message: "Lugar creado",
    });
  
  } else {
    res.status(400).json({
      message: "No se enviaron correctamente los parametros.",
      parameters: ["name", "image", "lat", "lon", "description"],
    }); // Bad Request
  }
};
