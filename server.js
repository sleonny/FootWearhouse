// const express = require("express");
// const cors = require("cors");
// const session = require("express-session");
// const { Sequelize, Model } = require("sequelize");

// const app = express();

// const userRouter = require("./controllers/api_routes/user");
// const profileRouter = require("./controllers/api_routes/profile");
// const shoeRouter = require("./controllers/api_routes/shoe");

// app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(
//   session({
//     secret: "your_secret_key",
//     resave: true,
//     saveUninitialized: true,
//   })
// );

// const sequelize = new Sequelize("FootWearHouse", "root", "1Qws7u12", {
//   host: "localhost",
//   dialect: "mysql",
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// app.use("/user", userRouter);
// app.use("/profile", profileRouter);
// app.use("/shoe", shoeRouter);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Internal Server Error");
// });

// app.listen(3001, () => {
//   console.log("Server listening on port 3306");
// });

const path = require("path");
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const userRouter = require("./controllers/api_routes/user");
const profileRouter = require("./controllers/api_routes/profile");
const shoeRouter = require("./controllers/api_routes/shoe");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "your_secret_key",
  cookie: {
    maxAge: 150,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on server 3001"));
});
