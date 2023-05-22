const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("../models/User"); // Assuming the User model is located in the "../models" directory

class Profile extends Model {}

Profile.init(
  {
    shoes_for_sale: {
      type: DataTypes.STRING,
    },
    shoes_for_trade: {
      type: DataTypes.STRING,
    },
    shoes_for_both: {
      type: DataTypes.STRING,
    },
    wishlist: {
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER, // Assuming the ID column in the User model is of INTEGER type
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Profile",
    // Profile model definition
  }
);

module.exports = Profile;
