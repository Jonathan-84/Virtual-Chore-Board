const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

// const routes = require("./controllers/");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// const hbs = exphbs.create({});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Host Static Files so css and js files can be retrieved
app.use(express.static(path.join(__dirname, "/public")));

// turn on routes
app.use(require("./controllers/"));
// app.use(routes);

/// add express sessions language
const choresDB = require("./config/connection");

const sess = {
  secret: "UData",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: choresDB,
  }),
};

app.use(session(sess));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
