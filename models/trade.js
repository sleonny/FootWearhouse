const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("./db");

class Trade extends Model {}
Trade.init(
  {
    buyerId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
  },
  { sequelize }
);