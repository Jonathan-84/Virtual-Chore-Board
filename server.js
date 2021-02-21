var express = require('express');
const session = require('express-session');
var app = express();
var path = require("path");
const sequelize = require("./config/connection");
const routes = require("./controllers/");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

// app.engine("handlebars", hbs.engine);
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Host Static Files so css and js files can be retrieved
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

/// add express sessions language
const SequelizeStore = require('connect-session-sequelize')(session.Store);
/*
const sess = {
  secret: 'UData',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
     db: choresDB
  })
};

app.use(session(sess));
*/

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
