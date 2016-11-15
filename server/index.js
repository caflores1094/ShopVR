var express = require('express');
var bodyParser = require('body-parser');
var router = require('express').Router();
var db = require('./db');
var https = require('https');
var http = require('http');
var fs = require('fs');

var authController = require('./controllers/auth.js');
var picController = require('./controllers/pic.js');

//this is for HTTPS
var options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

var server = express();

var normalServer = http.createServer(server).listen(3000);
var secureServer = https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("secure https server running on 8000");
}).listen(8000);

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlenco
server.use(express.static(__dirname + '/../client'));
server.use(router);

router.post('/login/facebook', authController.login);

router.get('/', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

router.post('/api/upload', picController.pictures.post);
router.post('/api/feed', picController.pictures.getMostRecentImage);

router.get('/profile', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

router.get('/vr', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

router.get('/view', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

module.exports = server;
