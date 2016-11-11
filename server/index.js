var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var path = require('path');
var controller = require('./controllers/auth.js');

var server = express();

server.set('port', 3000)
server.listen(server.get('port'), function () {
  console.log('Server listening');
});



server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlenco
server.use(express.static(__dirname + '/../client'));

server.get('/auth/login', controller.login);

server.get('/test', function (request, response){
  response.sendFile(path.resolve(__dirname, '../client', 'index.html'));
})

module.exports = server;
