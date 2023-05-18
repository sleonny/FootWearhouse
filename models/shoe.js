const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("../models");

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
    // Add foreign key
    UserId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Shoe",
  }
);

module.exports = Shoe;
