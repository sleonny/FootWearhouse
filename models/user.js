const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequelize,
  modelName: "User",
});
module.exports = User;
