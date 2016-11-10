var models = require('../models');

module.exports = {
  users: {
    get: function(req, res) {
      models.users.get(function(err, results) {
        if (err) console.log(err);
        res.send(results);
      });
    },
    post: function(req, res) {
      var params = [req.body.name, req.body.email, req.body.gender, 
                    req.body.price, req.body.profile_pic];
      models.users.post(params, function(err, results) {
        if (err) console.log(err);
        res.sendStatus(201);
      });
    }
  },
  items: {
    get: function(req, res) {
      models.items.get(function(err, results) {
        if (err) console.log(err);
        res.send(results);
      });
    },
    post: function(req, res) {
      var params = [req.body.brand, req.body.item_name, req.body.price, 
                    req.body.pic, req.body.category_id, req.body.user_id];
      models.users.post(params, function(err, results) {
        if (err) console.log(err);
        res.sendStatus(201);
      });
    }
  }
};