// const sequelize = require("../config/connection");
const User = require("./User");
const Shoe = require("./shoe");

User.hasMany(Shoe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Shoe.belongsTo(User, {
  foreignKey: 'user_id'
});



// sequelize,
module.exports = {
  User,
  Shoe,
};