var mysql = require('mysql');

// Establish connection to mysql database
var connection = mysql.createConnection({
  user: 'ba6adb9eb41809',
  password: '7decb2ed',
  host: 'us-cdbr-iron-east-04.cleardb.net',
  database: 'heroku_8f76abdea29d9e5'
});

connection.connect();
// connection.end();

module.exports = connection;

// asdfasdfasfa
// asdf
// asdf
// asdfasdfasfadf
