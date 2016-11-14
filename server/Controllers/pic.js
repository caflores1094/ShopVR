var models = require('../models/model.js');

module.exports = {
	pictures: {
		//post a pictures and associated tags
		post: function(req) {
			models.pictures.saveImage([[req.body.file]], function(err, results) {
				if (err) console.log('error saving picture', err);
			});
			console.log('req', req.body.tag);
			models.pictures.saveTag([req.body.tag], function(err, results) {
				if (err) console.log('error adding tags', err);
			});
		},
		// //get all tags associated with a user
		getAllImages: function(req, callback) {
		  console.log('in get all images', req);
		  models.pictures.getUserImages(req.user, function(err, results) {
			if (err) console.log('error retrieving user images', err);
			console.log('get user tags results', results);
		  });
		  callback(null, results);
		},

		// //get all tags associated with a user
		// getAllTags: function(req, callback) {
		//   var userImages = null;
		//   //first call getAllImages to get all user's images
		//   // getAllImages(req.user, function(err, results) {
		//   // 	if (err) console.log('error retrieving user images', err);
		//   // 	userImages = results;
		//   // });
		//   // console.log(userImages, 'userImages');
		//   // //then for each image, take image name to get tags
		//   // var data = {};
		//   // userImages.forEach(function(image) {
		//   // 	models.pictures.getUserTags(image.name, function(err, results) {
		// 	 //  if (err) console.log('error retrieving user images', err);
		// 	 //  console.log('get user tags results', results);
		// 	 //  data[image.name] = results; 
		//   //   });
		//   // })
		//   callback(null, data);
		// }
		//get one picture
	} 
}