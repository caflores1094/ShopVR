var models = require('../models/model.js');


module.exports = {
	pictures: {
		//post a pictures and associated tags
		post: function(req) {
			models.pictures.saveImage(req.body.file, req.body.u_id, function(err, results) {
				if (err) console.log('error saving picture', err);
				console.log('req', req.body.tag);
				models.pictures.saveTag([req.body.tag], req.body.file, function(err, results) {
					if (err) console.log('error adding tags', err);
				});
			});
		},
		// //get all tags associated with a user
		getAllImages: function(req, res) {
		  console.log('in get all images', req);
		  models.pictures.getUserImages(req.body.u_id, function(err, results) {
			if (err) console.log('error retrieving user images', err);
			console.log('get user tags results', results);
		    res.send(results);
		  });
		  // callback(null, results);
		},

		getMostRecentImage: function(req, res) {
		  console.log('in get all images', req);
		  models.pictures.getRecentImage(req.body.u_id, function(err, results) {
			if (err) console.log('error retrieving user images', err);
			console.log('get user tags results', results);
			var picName = results[0].name;
			models.pictures.getUserTags(picName, function(err, results){
				console.log(results);
		    	res.send(results);
			})
		  });
		  // callback(null, results);
		},

		getUserTags: function(req, res) {
		  models.pictures.getUserTags()
		}

		// //get all tags associated with a user
		// getAllTags: function(req, res) {
		//   var userImages = null;
		//   //first call getAllImages to get all user's images
		//   getAllImages(req.u_id, function(err, results) {
		//   	if (err) console.log('error retrieving user images', err);
		//   	userImages = results;
		//     console.log(userImages, 'userImages');

		//   	var data = {};		  
		//   	//then for each image, take image name to get tags  
		//     userImages.forEach(function(image) {
		//   	  models.pictures.getUserTags(image.name, function(err, results) {
		// 	    if (err) console.log('error retrieving user images', err);
		// 	    console.log('get user tags results', results);
		// 	    data[image.name] = results; 
		//       });
		//     })
		//     res.send('hello');
		//   });
		// }
	} 
}