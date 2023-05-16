const router = require("express").Router();
const userRoutes = require("./user");
const shoeTradeRoutes = require("./shoe_trade");
const shoeRoutes = require("./shoe");
const tradeRoute = require("./trade");

router.use("/user", userRoutes);
router.use("/shoe", shoeRoutes);
router.use("/shoe_trade", shoeTradeRoutes);
router.use("/trade", tradeRoute);

module.exports = router;
