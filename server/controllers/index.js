var models = require('../models/model.js');

module.exports = {
  users: {
    get: function(req, callback) {
      models.users.getOne(req.id, function(err, results) {
        if (err) callback(err, null);
        else callback(null, results);
      });
    },
    post: function(req, callback) {
      var params = [[req.name, req.email, req.gender, req.locale, req.timezone, req.friends.summary.total_count, req.id, req.picture.data.url, 0, 10000]];
      models.users.post(params, function(err, results) {
        if (err) callback(err, null);
        else callback(null, results);
      });
    },
    update: function(req, res) {
      var params = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        min_price: req.body.min_price,
        max_price: req.body.max_price
      };
      models.users.update(params, function(err, results) {
        if (err) {
          console.log('err', err);
        } else {
          res.send(results);
        }
      });
    },
    postFriends: function(req, res) {
      req.body.friends.forEach(function(friend) {
        models.users.getOne(friend.id, function(err, results) {
          if (err){
            console.log('err', err);
          }
          else {
            if (results.length > 0) {
              var pairing = req.body.user + '' + results[0].id;
              var params = [[results[0].name, req.body.user, results[0].id, pairing]];
              models.users.postFriends(params, function(err, results) {
                if (err) {
                  console.log('err', err);
                } else {
                  res.send(results);
                }
              });
            }
          }
        });
      });
    },
    getFriends: function(req, res) {
      models.users.getFriends(req.body, function(err, results) {
        if (err) {
          console.log('err', err);
        } else {
          console.log('friends', results);
          results.forEach(function(friend) {
            models.wishlist.getAll(friend.fid, function(err, results) {
              if (err) {
                console.log('err, err');
              } else {
                console.log('wishlist', results);
              }
            })
          });
        }
      });
    },
    findUser: function(req, res) {
      models.users.findUser(req.body.userid, function(err, results) {
        if (err) console.log('error finding user', err);
        else res.send(results);
      });
    }
  }
};
