const path = require("path");
const express = require("express");
const router = express.Router();
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const cors = require("cors");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

const sess = {
  secret: "your_secret_key",
  cookie: {
    maxAge: 300000,
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

// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(routes);

app.use(express.static(path.join("client", "build")));

sequelize.sync({ force: false }).then(() => {
  // app.listen(PORT, () => console.log("Now listening on PORT 3001"));
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});