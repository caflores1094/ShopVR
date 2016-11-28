var models = require('../models/model.js');


module.exports = {
  wishlist: {
    //insert a wishlist item into the DB
    post: function(req) {
      console.log('req userid', req.body.userID);
      //TODO: edit line below with correct way to get item infeo
      //item_name, pic_name, price, url, userid
      var item = [[req.body.name, req.body.image.sizes.IPhoneSmall.url, req.body.price, req.body.clickUrl, req.body.userID]];

      models.wishlist.post(item, function(err, results) {
      	if (err) console.log('error in wishlist controller', err);
      });	
    },
    // //get all wishlist items associated with a user
    getAll: function(req, res) {
      //TODO: edit line right below with correct path to user
      var userID = req.body.userID;
      models.wishlist.getAll(userID, function(err, results) {
      	if (err) console.log('error in wishlist controller', err);
      	res.send(results);
      });		  
    },

    removeItem: function(req, res){
      var userID = req.body.userID;  
      var itemName = req.body.itemName;
      models.wishlist.removeItem(userID, itemName, function(err, results) {
        if (err) console.log('error in wishlist controller', err);
        res.sendStatus(202);
      });     
    },

    getAllForFriend: function(req, res) {
      //TODO: edit line right below with correct path to user
      var userID = req.body.friendUserID;
      models.wishlist.getAll(userID, function(err, results) {
        if (err) console.log('error in wishlist controller', err);
        console.log(results, 'results in controller');
        res.send(results);
      });     
    },

  }	
}