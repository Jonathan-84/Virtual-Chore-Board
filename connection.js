const mysql = require("mysql2");
const util = require('util');

// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

// create connection to our database, pass in your MySQL information for username and password
const sequelize = new Sequelize('choresDB', 'root', 'mulderscully28', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });

connection.connect();
//connection.query = util.promisify(connection.query);

module.exports = sequelize;

///13.1.4 Builind the structure for models