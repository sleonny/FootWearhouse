const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("./db");


class Shoe extends Model {}
Shoe.init(
  {
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    size: DataTypes.DECIMAL,
    price: DataTypes.DECIMAL,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  { sequelize }
);






