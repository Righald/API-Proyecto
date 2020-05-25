const { Sequelize } = require("sequelize");

const db = {};

const sequelize = new Sequelize("mapi", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
