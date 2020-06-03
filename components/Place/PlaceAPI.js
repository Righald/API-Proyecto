/**
 * Rutas de Lugares
 */
// Libs
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const Place = express.Router();
const middleware = require("../Middleware");
const { storage } = require("../../libs/utils");
Place.use(express.urlencoded({ extended: false }));
Place.use(express.json());
Place.use(cors());

Place.get("/getAllPlaces", (req, res) => {
  services.allplaces(req, res);
});

Place.post("/registerPlace", middleware, storage.upload.single("image"), (req, res) => {
  services.create(req.file, req, res);
});

Place.get("/:id", (req, res) => {
  services.oneplace(req.params, res);
});

Place.put("/:id", middleware, storage.upload.single("image"), (req, res) => {
  services.updateplace(req.params, req.body, res);
});

Place.delete("/:id", middleware, (req, res) => {
  services.deleteplace(req.params, res);
});

module.exports = Place;
