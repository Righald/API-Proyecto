"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      */
    return queryInterface.bulkInsert(
      "places",
      [
        {
          name: "UABCS",
          image: "uabcs.jpg",
          lat: 24.105836,
          lon: -110.320266,
          description: "Universidad Autónoma de Baja California Sur",
          userId: 1,
        },
        {
          name: "Galerías La Paz",
          image: "galerias.jpg",
          lat: 24.1175948,
          lon: -110.3376609,
          description: "Centro comercial",
          userId: 1,
        },
        {
          name: "Kiosko",
          image: "kiosko.jpg",
          lat: 24.164456, 
          lon: -110.316657,
          description: "Kiosko Del Malecón De La Paz",
          userId: 1,
        },
        {
          name: "Parque UABCS",
          image: "parque.jpg",
          lat: 24.105636, 
          lon: -110.316157,
          description: "Parque deportivo de la Universidad Autónoma De Baja California Sur",
          userId: 2,
        },
        {
          name: "ITLP",
          image: "tec.jpg",
          lat: 24.119466, 
          lon: -110.308117,
          description: "Instituto Tecnológico De La Paz",
          userId: 2,
        },
        {
          name: "Sec. 17",
          image: "17.jpg",
          lat: 24.130403, 
          lon: -110.335981,
          description: "Escuela Secundaria Técnica Número 17",
          userId: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
    return queryInterface.bulkDelete("places", null, {});
  },
};
