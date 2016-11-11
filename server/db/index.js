var mysql = require('mysql');

// Establish connection to mysql database
var connection = mysql.createConnection({
  user: 'username',
  password: 'password',
  database: 'shopvr'
});

// connection.connect();

module.exports = connection;
