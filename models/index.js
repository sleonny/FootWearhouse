const sequelize = require("../config/connection");
const User = require("./User");
const Shoe = require("./Shoe");

User.hasMany(Shoe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Shoe.belongsTo(User, {
  foreignKey: 'user_id'
});



module.exports = {
  sequelize,
  User,
  Shoe,
};
