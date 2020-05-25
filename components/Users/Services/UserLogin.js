/**
 * Esta función genera un token a un usuario autentico.
 * @param {object} data
 * @param {string} data.email
 * @param {string} data.password
 */
const dal = require("../UserDAL");
const jwt = require("jsonwebtoken");
const { verifyPassword, jwtConfig } = require("../../../libs/utils");
module.exports = async ({ email, password }, res) => {
  let status = 500;
  let response = {
    message: "Error al autenticar al usuario",
    parameters: ["email", "password"],
  };
  if (email && password) {
    const user = await dal.findOne({
      where: {
        email: email,
      },
    });
    if (
      user &&
      user instanceof dal &&
      verifyPassword(password, user.password)
    ) {
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          birthday: user.birthday,
        },
        jwtConfig.privateKey,
        {
          expiresIn: jwtConfig.expiration,
        }
      );
      if (token) {
        status = 200;
        response = {
          message: "Autenticado correctamente.",
          data: {
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
              birthday: user.birthday,
            },
            token,
          },
        };
      }
    }
  }
  res.status(status).json(response);
};
