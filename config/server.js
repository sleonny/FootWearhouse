const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const bcrypt = require("bcrypt");
const { Sequelize, Model, DataTypes } = require("sequelize");

const app = express();

const shoeRouter = require("./routes/shoe");
const userRouter = require("./routes/user");
const tradeRouter = require("./routes/trade");
const shoeTradeRouter = require("./routes/shoe_trade");

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

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "user",
  }
);

(async () => {
  await sequelize.sync({ force: true });
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash("password", saltRounds);
  await User.create({
    username: "user1",
    email: "user1@example.com",
    password: hashedPassword,
  });
})();

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { username, email, password } = req.body;
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  res.json(user);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
