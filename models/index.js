const User = require("./user");
const Shoe = requre("./shoe.js");
const Trade = require("./shoe_trade.js");
const ShoeTrade = require("./shoe_trade.js");

User.hasMany(Shoe);
Shoe.belongsTo(User);
Trade.belongsToMany(Shoe, { through: ShoeTrade });
Shoe.belongsToMany(Trade, { through: ShoeTrade });
