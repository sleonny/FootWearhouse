const sequelize = require("./sequelize");
const User = require("./user");
const Profile = require("./Profile");
const Shoe = require("./shoe");

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Shoe);
Shoe.belongsTo(User);

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true });
    console.log("Tables created successfully.");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
}

syncDatabase();


