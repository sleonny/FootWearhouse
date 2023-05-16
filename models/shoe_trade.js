const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("./db");

const ShoeTrade = sequelize.define("shoe_trade", {
  tradeId: DataTypes.INTEGER,
  shoeId: DataTypes.INTEGER,
});
