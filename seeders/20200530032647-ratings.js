'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ratings",
      [
        {
          user_id: "1",
          place_id: "1",
          rating: "5",
        },
        {
          user_id: "2",
          place_id: "1",
          rating: "4",
        },
        {
          user_id: "1",
          place_id: "2",
          rating: "4",
        },
        {
          user_id: "1",
          place_id: "3",
          rating: "3",
        },
        {
          user_id: "1",
          place_id: "4",
          rating: "2",
        },
        {
          user_id: "1",
          place_id: "5",
          rating: "1",
        },
        {
          user_id: "1",
          place_id: "6",
          rating: "1",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
     return queryInterface.bulkDelete("ratings", null, {});
  }
};
