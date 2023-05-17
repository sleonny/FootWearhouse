const { Model, DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
const User = require("./user");

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
  },
  {
    sequelize,
    modelName: "Profile",
    // Profile model definition
  }
);

module.exports = Profile;
