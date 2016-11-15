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
      var queryStr = 'select * from users where users.id=?';
      db.query(newQueryStr, [user], function(err, results) {
        if (err) {
          callback(err, null);
        } else {
          db.query(queryStr, results.insertId, function(err2, results2) {
            callback(err2, results2);
          });
        }
      });
    },
  },

  pictures: {
   //save an uploaded image and corresponding tags
    saveImage: function(image, userID, callback) {
      var queryStr = 'INSERT INTO pictures (name, u_id) VALUES ?';
      db.query(queryStr, [image, userID], function(err, results) {
        callback(err, results);
      });
    },
    saveTag: function(tags, imageName, callback) {
      tags[0].forEach(function(tag) {
      console.log('in saveTag', tag);
        var tagStr = 'INSERT INTO tags (tag, pic_name) VALUES ?'
        db.query(tagStr, [[[tag, imageName]]], function(err, results) {
          callback(err, results);
        });
      });
    },
   // //get all images that belong to a user
    getUserImages: function(user, callback) {
      var queryStr = 'SELECT * from pictures where pictures.user_id =?';
      db.query(queryStr, [user], function(err, results) {
        if (err) console.log('error getting user images', err);
        callback(err, results);
      });
    },
    // //get all tags that belong to a user
    getUserTags: function(picName, callback) {
      var queryStr = 'SELECT * from tags where tags.pic_name = ?';
      db.query(queryStr, [picName], function(err, results) {
        if (err) console.log('error getting user tags', err);
        callback(err, results);
      });
    }
  }
};
