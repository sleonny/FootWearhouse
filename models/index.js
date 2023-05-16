const sequelize = require("../sequelize");
const User = require("./user");
const Profile = require("./Profile");
const Shoe = require("./shoe");

User.hasOne(Profile);
Profile.belongsTo(User);

User.hasMany(Shoe);
Shoe.belongsTo(User);



sequelize.sync({ force: true }) // Use { force: true } to drop and recreate the tables on each sync
  .then(() => {
    console.log('Tables created successfully.');
  })
  .catch((err) => {
    console.error('Error creating tables:', err);
  });
