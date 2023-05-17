const sequelize = require("./sequelize");
const User = require("./user");
const Profile = require("./profile");
const Shoe = require("./shoe");

Shoe.belongsTo(User);
User.hasMany(Shoe);
module.exports = Shoe;

Profile.belongsTo(User);
User.hasOne(Profile);
module.exports = Profile;

syncDatabase();


