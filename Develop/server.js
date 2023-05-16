const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcrypt");
const mysql = require("mysql2");
const { Sequelize, Model, DataTypes } = require("sequelize");

const app = express();

const shoeRouter = require("./controllers/api_routes/shoe.js");
const userRouter = require("./controllers/api_routes/user.js");
const tradeRouter = require("./controllers/api_routes/trade.js");
const shoeTradeRouter = require("./controllers/api_routes/shoe_trade.js");

app.use("/shoes", shoeRouter);
app.use("/users", userRouter);
app.use("/trades", tradeRouter);
app.use("/shoe_trades", shoeTradeRouter);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "your_secret_key",
    resave: true,
    saveUninitialized: true,
  })
);

const sequelize = new Sequelize("database_name", "username", "password", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
