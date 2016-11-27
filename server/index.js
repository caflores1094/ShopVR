var bodyParser = require('body-parser');
var express = require('express');
var router = require('express').Router();
var db = require('./db');
var request = require('request');
var https = require('https');
var fs = require('fs');
var multer = require('multer');

var authController = require('./controllers/auth.js');
var picController = require('./controllers/pic.js');
var wishlistController = require('./controllers/wishlist.js');
var userController = require('./controllers/index.js');
var config = require('./config.js');

var server = express();


// var options = {
//   key: fs.readFileSync('./server/ssl/key.pem', 'utf8'),
//   cert: fs.readFileSync('./server/ssl/server.crt', 'utf8')
// };

// Set up auth
var gcloud = require('google-cloud')({
  keyFilename: __dirname + '/../' + 'shopvr-796e817665e9.json',
  projectId: 'shopvr-149122'
});

var vision = gcloud.vision();

server.use(multer({dest: 'uploads/'}).single('image'));

server.post('/upload', function(req, res, next) {
  // Choose what the Vision API should detect
  // Choices are: faces, landmarks, labels, logos, properties, safeSearch, texts
  var types = ['labels'];
  // Send the image to the Cloud Vision API
  vision.detect(req.file.path, types, function(err, detections, apiResponse) {
    if (err) {
      console.log('cloud vision error', err);
      res.end('Cloud Vision Error');
    } else {
      fs.unlinkSync(req.file.path);
      res.send(JSON.stringify(detections, null, 4));
    }
  });
});

// function base64Image(src) {
//   var data = fs.readFileSync(src).toString('base64');
//   return util.format('data:%s;base64,%s', mime.lookup(src), data);
// }

// var secureServer = https.createServer(options, server).listen(3001);
// var io = require('socket.io')(secureServer);

server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlenco
server.use(express.static(__dirname + '/../client'));
server.use(router);

server.listen(config.port, function () {
  console.log('Server listening');
});

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

router.post('/login/facebook', authController.login);
router.post('/api/getUser', userController.users.findUser);
router.post('/api/friends', userController.users.postFriends);
router.post('/api/getFriends', userController.users.getFriends);

router.get('/', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

router.post('/update/profile', userController.users.update);

router.post('/api/upload', picController.pictures.post);
router.post('/api/feed', picController.pictures.getMostRecentImage);
router.post('/api/like', wishlistController.wishlist.post);

router.post('/api/getWishList', wishlistController.wishlist.getAll);
router.post('/api/getWishListForFriend', wishlistController.wishlist.getAllForFriend);

router.post('/api/removeFromWishList', wishlistController.wishlist.removeItem);

router.get('/profile', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

router.get('/friends', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

router.get('/vr', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

router.get('/view', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

router.post('/api/shopstyle', function(req, res) {
  request('http://api.shopstyle.com/api/v2/products/?pid=uid4025-36835155-23' + '&offset=' + req.body.offset + '&fts=' + req.body.fts + '&limit=' + req.body.limit
    , function (error, response) {
      if (error) {
        console.log(error)
      } else {
        res.send(response.body);
      }
  });

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

router.get('/profile/:userid', function(req, res) {
  res.sendFile('/client/index.html', {root: __dirname + '/..'});
});

module.exports = server;