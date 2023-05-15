"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "shoe_trades",
      [
        { tradeId: 1, shoeId: 1, createdAt: new Date(), updatedAt: new Date() },
        { tradeId: 2, shoeId: 3, createdAt: new Date(), updatedAt: new Date() },
        { tradeId: 3, shoeId: 2, createdAt: new Date(), updatedAt: new Date() },
        { tradeId: 4, shoeId: 1, createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("shoe_trades", null, {});
  },
};
