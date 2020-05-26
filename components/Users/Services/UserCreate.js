/*
  Esta función crea un nuevo usuario en la base de datos.
  @param [object] data
  @param [string] data.name
  @param [string] data.email
  @param [string] data.password
  @param [DATE] data.birthday
*/
"use strict";
const dal = require("../UserDAL");
const { hashPassword } = require("../../../libs/utils");

module.exports = async({ name, email, password, birthday }, res) => {
  
  if (name && email && hash && birthday) 
  {
  	const hash = hashPassword(password);
    
    dal.create({
      name,
      email,
      hash,
      birthday,
    });
    
    res.status(200).json({
      message: "Usuario Registrado",
    });

  } 
  else 
  {
    res.status(400).json({
      message: "No se enviaron correctamente los parametros.",
      parameters: ["name", "email", "password", "birthday"],
    }); // Bad Request
  }
};
