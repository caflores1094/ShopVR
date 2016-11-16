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
    update: function(req, callback) {
      callback(null, null);
      var params = {
        name: req.name, 
        email: req.email, 
        gender: req.gender,
        min_price: req.min_price, 
        max_price: req.max_price
      };
      models.users.update(params, function(err, results) {
        if (err) callback(err, null);
        else callback(null, results);
      });
    }
  }
};
