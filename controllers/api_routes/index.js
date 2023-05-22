const app = require("express").Router();
const userRoutes = require("./userRoutes");
const profileRoutes = require("./profileRoutes");
const shoeRoutes = require("./shoeRoutes");
app.use("/user", userRoutes);
app.use("/profile", profileRoutes);
app.use("/shoe", shoeRoutes);

module.exports = app;
