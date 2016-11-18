var mysql = require('mysql');

// Establish connection to mysql database
var connection = mysql.createConnection({
  host: 'us-cdbr-iron-east-04.cleardb.net',
  user: 'ba6adb9eb41809',
  password: '7decb2ed',
  database: 'heroku_8f76abdea29d9e5'
});

connection.connect(function(err){
 if(err){
   console.log('Error connecting to Db');
   return;
 }
 console.log('Connection established');
});
// connection.end();

module.exports = connection;

// asdfasdfasfa
// asdf
// asdf
// asdfasdfasfadf
