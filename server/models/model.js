var db = require('../db');

module.exports = {
  users: {
    //find all users
    get: function(callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    //find one particular user
    getOne: function(email, callback) {
      var queryStr = 'select * from users where users.email=?'; 
      db.query(queryStr, [email], function(err, results) {
        if (err) {
          console.log(err);
        }
        callback(err, results);
      })
    },
    //create a new user
    post: function(user, callback) {
      var newQueryStr = 'INSERT INTO users (name, email, gender, locale, timezone, friends, fb_id, profile_pic) \
                        VALUES ?';
      db.query(newQueryStr, [user], function(err, results) {
        callback(err, results);
      });
    },
  },

  pictures: {
   //save an uploaded image and corresponding tags
    saveImage: function(image, tags, callback) {
      var queryStr = 'INSERT INTO pictures (name) VALUES ?';
      db.query(queryStr, [image.name], function(err, results) {
        callback(err, results);
      });
      tags.forEach(function(tag) {
        var tagStr = 'INSERT INTO tags (tag, pic_name) VALUES ?'
        db.query(tagStr, [tag, image.name], function(err, results) {
          callback(err, results);
        });
      });
    },
    // //get all images that belong to a user
    // getUserImages: function(user, callback) {
    //   var queryStr = 'SELECT * from pictures where pictures.user_id =?';
    //   db.query(queryStr, [user], function(err, results) {
    //     if (err) {
    //       console.log(err);
    //     }
    //     callback(err, results);
    //   });
    // }
  }
};