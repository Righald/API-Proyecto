const create = require("./PlaceCreate");
const allplaces = require("./placeGetAll");
const oneplace = require("./getOnePlace");
const deleteplace = require("./deletePlace");
const updateplace = require("./updatePlace");

module.exports = {
  create,
  allplaces,
  oneplace,
  deleteplace,
  updateplace,
};
