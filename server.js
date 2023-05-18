const express = require("express");
const cors = require("cors");
const session = require("express-session");
const userRouter = require("./controllers/api_routes/user");
const profileRouter = require("./controllers/api_routes/profile");
const shoeRouter = require("./controllers/api_routes/shoe");
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'your_secret_key',
  cookie: {
    maxAge: 150,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(dirname, 'public')));

app.use(routes);
  
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on server 3001'));
});


