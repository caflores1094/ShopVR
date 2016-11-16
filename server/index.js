var bodyParser = require('body-parser');
var express = require('express');
var router = require('express').Router();
var db = require('./db');
var request = require('request');

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

router.get('/api/getimage/:id', function (req, res) {
  var src = req.params.id;
  while (src.indexOf('SLASH') >= 0) {
    src = src.replace('SLASH', '/');
  }

  var options = {
    url: src,
    headers: {
      'Content-Type': 'image/jpeg'
    },
    encoding: null
  };

  request(options, function(err, response, httpResponse) {
    res.end(httpResponse, 'binary');
  });
});

module.exports = server;



// var https = require('https');
// var fs = require('fs');
// var path = require('path');

// console.log(__dirname);
//  var options = {
//   key: fs.readFileSync(__dirname + '/server.key', 'utf8'),
//   cert: fs.readFileSync(__dirname +'/server.crt', 'utf8')
//  };
// z
// https.createServer(options, (req, res) => {
// 	console.log('req', req);
// 	console.log('res', res);
//   res.writeHead(200);
//   res.send('hello world\n');
// }).listen(8000);


// var express = require('express');
// var bodyParser = require('body-parser');
// var router = require('express').Router();
// var db = require('./db');
// var https = require('https');
// var http = require('http');
// var fs = require('fs');

// var authController = require('./controllers/auth.js');
// var picController = require('./controllers/pic.js');

// //this is for HTTPS
// var options = {
//   key: fs.readFileSync('key.pem'),
//   cert: fs.readFileSync('cert.pem')
// };

// // var server = express();
// var secure = express();

// // var normalServer = http.createServer(server).listen(3000);
// var secureServer = https.createServer(options, secure).listen(8000);

//  secure.get('/', function (req, res) {
//       res.header('Content-type', 'text/html');
//       return res.end('<h1>Hello, Secure World!</h1>');
//     });

// secure.use(router);

// // server.use(bodyParser.json()); // for parsing application/json
// // server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlenco
// // server.use(express.static(__dirname + '/../client'));
// // server.use(router);

// router.post('/login/facebook', authController.login);

// router.get('/', function(req, res) {
//   res.sendFile('/client/index.html', {root: __dirname + '/..'});
// });

// router.post('/api/upload', picController.pictures.post);
// router.post('/api/feed', picController.pictures.getMostRecentImage);

// router.get('/profile', function(req, res) {
//   res.sendFile('/client/index.html', {root: __dirname + '/..'});
// });

// router.get('/vr', function(req, res) {
//   res.sendFile('/client/index.html', {root: __dirname + '/..'});
// });

// router.get('/view', function(req, res) {
//   res.sendFile('/client/index.html', {root: __dirname + '/..'});
// });

// // module.exports = server;
// module.exports = secure;
