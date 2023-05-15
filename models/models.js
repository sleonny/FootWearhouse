const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("./db");

class User extends Model {
  async checkPassword(password) {
    return await bcrypt.compare(password, this.password);
  }
}
User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      set(value) {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(value, salt);
        this.setDataValue("password", hash);
      },
    },
  },
  { sequelize }
);

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

class Trade extends Model {}
Trade.init(
  {
    buyerId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
  },
  { sequelize }
);

const ShoeTrade = sequelize.define("shoe_trade", {
  tradeId: DataTypes.INTEGER,
  shoeId: DataTypes.INTEGER,
});

User.hasMany(Shoe);
Shoe.belongsTo(User);
Trade.belongsToMany(Shoe, { through: ShoeTrade });
Shoe.belongsToMany(Trade, { through: ShoeTrade });
