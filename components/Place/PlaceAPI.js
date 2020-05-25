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

Place.get("/", (req, res) => {
  res.status(200).json({
    message: "Metodo get",
  });
});

Place.post("/", middleware, (req, res) => {
  services.create(req.body, res);
});

Place.put("/", (req, res) => {
  res.status(200).json({
    message: "Metodo put",
  });
});

Place.delete("/", (req, res) => {
  res.status(200).json({
    message: "Metodo delete",
  });
});

module.exports = Place;
