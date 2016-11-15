var models = require('../models/model.js');


module.exports = {
  wishlist: {
    //insert a wishlist item into the DB
    post: function(req) {
      //TODO: edit line below with correct way to get item infeo
      var item = req.body;
      models.wishlist.post(item, function(err, results) {
      	if (err) console.log('error in wishlist controller', err);
      });	
    },
    // //get all wishlist items associated with a user
    getAll: function(req, res) {
      //TODO: edit line right below with correct path to user
      var user = req.body;
      models.wishlist.getAll(user, function(err, results) {
      	if (err) console.log('error in wishlist controller', err);
      	res.send(results);
      });		  
    };
  }	
}