"use strict";
const { hashPassword } = require("../libs/utils");
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Miguel Parra García",
          email: "miguel.parra.uabcs@gmail.com",
          password: hashPassword("holamundo123"),
          birthday: "1997-03-04",
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
