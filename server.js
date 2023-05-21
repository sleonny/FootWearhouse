const path = require("path");
const express = require("express");
const routes = require("./controllers/api_routes");
const cors = require("cors");
const session = require("express-session");
const userRouter = require("./controllers/api_routes/userRoutes");
const profileRouter = require("./controllers/api_routes/profileRoutes");
const shoeRouter = require("./controllers/api_routes/shoeRoutes");
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
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on server 3001"));
});
