var db = require('../db');

module.exports = {
  users: {
    get: function(callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    getOne: function(email, callback) {
      var queryStr = 'select * from users where users.email=?'; 
      db.query(queryStr, [email], function(err, results) {
        if (err) {
          console.log(err);
        }
        callback(err, results);
      })
    },
    post: function(user, callback) {
      console.log('user', user);
      var newQueryStr = 'INSERT INTO users (name, email, gender, locale, timezone, friends, fb_id, profile_pic) \
                        VALUES ?';
      db.query(newQueryStr, [user], function(err, results) {
        console.log('insert', results);
        callback(err, results);
      });
    }
  }
};