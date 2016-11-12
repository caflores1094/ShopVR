var models = require('../models/model.js');

module.exports = {
  users: {
    get: function(req, callback) {
      models.users.getOne(req.email, function(err, results) {
        if (err) console.log('got undefined', err);
        console.log('results', results);
      });
      callback(null, null);
    },
    post: function(req, callback) {
      var params = [[req.name, req.email, req.gender, req.locale, req.timezone, req.friends.summary.total_count, req.id, req.picture.data.url]];
      models.users.post(params, function(err, results) {
        if (err) {
          console.log('error in post controller', err);
        } /*else {
          console.log('complete');
          res.sendStatus(201);
        }*/
      });
      callback(null, null);
    }
  }
};