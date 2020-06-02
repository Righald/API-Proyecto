/**
 * Rutas de usuario
 */
 //libs
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const User = express.Router();
const middleware = require("../Middleware");
const multer = require('multer');
const upload = multer();

User.use(express.urlencoded({ extended: false }));
User.use(express.json());
User.use(cors());

User.post("/login", upload.none(), (req, res) => {
	const formData = req.body;
  	services.login(formData, res);
});

User.post("/isAuth", middleware, (req, res) => {
  services.isAuth(req, res);
});

User.post("/create", upload.none(), (req, res) => {
  const formData = req.body;
  services.create(formData, res);
});

module.exports = User;
