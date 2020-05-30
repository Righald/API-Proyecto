/**
 * Rutas de calificaciones
 */
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const Rating = express.Router();
const middleware = require("../Middleware");

Rating.use(express.urlencoded({ extended: false }));
Rating.use(express.json());
Rating.use(cors());

Rating.post("/", (req, res) => {
	services.create(req.body, res);
});

Rating.get("/:id", (req, res) => {
	services.getr(req.params, res);
});

module.exports = Rating;
