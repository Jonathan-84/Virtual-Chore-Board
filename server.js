var express = require('express');
const session = require('express-session');
var app = express();
var path = require('path');
const sequelize = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

/// add express sessions language
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'UData',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});