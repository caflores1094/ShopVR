var mysql = require('mysql');

// Establish connection to mysql database
var connection = mysql.createConnection({
  user: 'root',
  password: '1107',
  database: 'shopvr'
});


module.exports = connection;
