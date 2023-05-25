const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("../models/User"); // Assuming the User model is located in the "../models" directory

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
    user_id: {
      type: DataTypes.INTEGER, // Assuming the ID column in the User model is of INTEGER type
      allowNull: false,
    },
  },

  {
    sequelize,
    modelName: "Shoe",
  }
);

module.exports = Shoe;
