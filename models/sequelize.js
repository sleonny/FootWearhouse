const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("FootWareHouse", "root", "1Qws7u12", {
  host: "localhost",
  dialect: "mysql",
  logging: false, // Disable logging if not needed
});

module.exports = sequelize;
