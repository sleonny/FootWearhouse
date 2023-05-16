const { Model, DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

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
