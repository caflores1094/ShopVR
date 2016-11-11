var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');

var server = express();


server.set('port', 3000)
server.listen(server.get('port'), function () {
  console.log('Server listening');
});

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlenco
server.use(express.static(__dirname + '/../client'));


module.exports = server;
