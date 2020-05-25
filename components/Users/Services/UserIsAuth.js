/**
 * Esta función genera un token a un usuario autentico.
 * @param {object} data
 * @param {string} data.token
 */
module.exports = (req, res) => {
  let status = 200;
  let response = {
    message: req.userData,
  };
  res.status(status).json(response);
};
