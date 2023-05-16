const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize"); // Assuming you have a separate file for Sequelize initialization

class Profile extends Model {}

Profile.init(
  {
    shoes_for_sale: DataTypes.STRING,
    shoes_for_trade: DataTypes.STRING,
    shoes_for_both: DataTypes.STRING,
    wishlist: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Profile",
  }
);

module.exports = Profile;
