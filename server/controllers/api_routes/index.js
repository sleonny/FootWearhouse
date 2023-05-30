const router = require("express").Router();
const userRoutes = require("./userRoutes");
const shoeRoutes = require("./shoeRoutes");

router.use("/user", userRoutes);
router.use("/shoe", shoeRoutes);

module.exports = router;
