const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");

class Shoe extends Model {}

Shoe.init(
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    size: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    sequelize,
    modelName: "Shoe",
  }
);

module.exports = Shoe;
