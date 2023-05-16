const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Assuming you have a separate file for Sequelize initialization

class Shoe extends Model {}

Shoe.init({
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  size: DataTypes.STRING,
  price: DataTypes.DECIMAL(10, 2)
}, {
  sequelize,
  modelName: 'Shoe'
});

module.exports = Shoe;




