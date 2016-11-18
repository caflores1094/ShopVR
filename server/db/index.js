var config = require('./../config.js')
var mysql = require('mysql');

// Establish connection to mysql database
var connection = mysql.createConnection({
  host: config.db.host,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password,
  port: config.db.port
});

connection.connect();
// connection.end();

module.exports = connection;

// asdfasdfasfa
// asdf
// asdf
// asdfasdfasfadf
