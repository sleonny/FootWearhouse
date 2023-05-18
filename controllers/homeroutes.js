const router = require("express").Router();
const { Profile, User, Shoe } = require("../models");

router.get("/", async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
  res.render("homepage"); //not necessarily homepage
});

module.exports = router;
