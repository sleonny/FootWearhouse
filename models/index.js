const sequelize = require("../config/connection");
const User = require("../models");
const Profile = require("./profile");
const Shoe = require("./Shoe");

Shoe.belongsTo(User);
User.hasMany(Shoe);

Profile.belongsTo(User);
User.hasOne(Profile);

module.exports = {
  sequelize,
  User,
  Profile,
  Shoe,
};
