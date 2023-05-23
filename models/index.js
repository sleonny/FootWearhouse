const sequelize = require("../config/connection");
const User = require("./User");
const Shoe = require("./Shoe");

Shoe.belongsTo(User);
User.hasMany(Shoe);

module.exports = {
  sequelize,
  User,
  Shoe,
};
