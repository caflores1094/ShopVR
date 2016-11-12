var express = require('express');
var bodyParser = require('body-parser');
var router = require('express').Router();

var authController = require('./controllers/auth.js');
var picController = require('./controllers/pic.js');

var server = express();


server.set('port', 3000)
server.listen(server.get('port'), function () {
  console.log('Server listening');
});

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlenco
server.use(express.static(__dirname + '/../client'));
console.log(__dirname);
server.use(router);

router.post('/login/facebook', authController.login);
router.get('/', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});
router.post('/api/upload', picController.pictures.post);

module.exports = server;
