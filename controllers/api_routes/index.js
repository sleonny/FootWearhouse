const router = require("express").Router();
const userRoutes = require("./userRoutes");
const shoeRoutes = require("./shoeRoutes");

router.use("./user", userRoutes);
router.use("shoes", shoeRoutes);

module.exports = router;
