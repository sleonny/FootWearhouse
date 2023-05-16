const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
const User = require("./user");

const Profile = sequelize.define(
  "Profile",
  {
    shoes_for_sale: DataTypes.STRING,
    shoes_for_trade: DataTypes.STRING,
    shoes_for_both: DataTypes.STRING,
    wishlist: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Profile",
    // Profile model definition
  }
);

Profile.belongsTo(User);
User.hasOne(Profile);
module.exports = Profile;
