var mysql = require('mysql');

// Establish connection to mysql database
var connection = mysql.createConnection({
  user: 'root',
  password: '1107',
  database: 'shopvr'
});

connection.connect();
// connection.end();

module.exports = connection;

// asdfasdfasfa
// asdf
// asdf
// asdfasdfasfadf
