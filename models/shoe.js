const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
const User = require("./user");

const Shoe = sequelize.define("Shoe", {
  name: DataTypes.STRING,
description: DataTypes.TEXT,
size: DataTypes.STRING,
price: DataTypes.DECIMAL(10, 2),
},
{
sequelize,
modelName: "Shoe",
 
});




