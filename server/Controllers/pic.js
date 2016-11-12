var models = require('../models/model.js');

module.exports = {
	pictures: {
		//post a pictures and associated tags
		post: function(req, callback) {
			models.pictures.saveImage(req.file, req.tag, function(err, results) {
				if (err) console.log('error saving picture', err);
			});
			callback(null, null);
		},
		// //get all pictures associated with a user
		// getAll: function(req, callback) {
		// 	models.pictures.getUserImages(req.user, function(err, results) {
		// 		if (err) console.log('error retrieving user images', err);
		// 	});
		// 	callback(null, null);
		// }
		// //get one picture
	} 
}