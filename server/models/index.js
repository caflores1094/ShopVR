var db = require('../db');

module.exports = {
  users: {
    get: function(callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, result) {
        callback(results);
      });
    }
  },
};