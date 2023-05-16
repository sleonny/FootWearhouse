const User = require("./user");
const Profile = require("./Profile");
const Shoe = require("./shoe");

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Shoe);
Shoe.belongsTo(User);

const sequelize = require("../sequelize");

sequelize
  .sync()
  .then(() => {
    console.log("Database schema synchronized.");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });
