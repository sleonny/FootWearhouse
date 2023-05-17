const router = require("express").Router();
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");
const shoeRoutes = require("./shoeRoutes");

router.use("/user", userRoutes);
router.use("/profile", profileRoutes);
router.use("/shoe", shoeRoutes);

module.exports = router;
