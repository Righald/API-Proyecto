/**
 * Rutas de usuario
 */
const express = require("express");
const cors = require("cors");
const services = require("./Services");
const User = express.Router();
const middleware = require("../Middleware");

User.use(express.urlencoded({ extended: false }));
User.use(express.json());
User.use(cors());

User.post("/login", (req, res) => {
  services.login(req.body, res);
});

User.post("/isAuth", middleware, (req, res) => {
  services.isAuth(req, res);
});

module.exports = User;
