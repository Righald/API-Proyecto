/**
 * Rutas de Lugares
 */
// Libs
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const Place = express.Router();
const middleware = require("../Middleware");

Place.use(express.urlencoded({ extended: false }));
Place.use(express.json());
Place.use(cors());

Place.get("/getAllPlaces", (req, res) => {
  services.allplaces(req, res);
});

Place.post("/registerPlace", middleware, (req, res) => {
  services.create(req.body, res);
});

Place.get("/:id", (req, res) => {
  services.oneplace(req.params, res);
});

Place.put("/:id", middleware, (req, res) => {
  services.updateplace(req.params, req.body, res);
});

Place.delete("/:id", middleware, (req, res) => {
  services.deleteplace(req.params, res);
});

module.exports = Place;
