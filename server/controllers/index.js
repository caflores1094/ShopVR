var models = require('../models');

module.exports = {
  users: {
    get: function(req, res) {
      models.users.get(function(err, results) {
        if (err) console.log(err);
        res.send(results);
      });
    }
  },
  items: {

  }
};