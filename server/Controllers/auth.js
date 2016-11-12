const controller = require('./index.js');

module.exports = {
//login
  login: function(req, res) {
    //put data.body in the DB IF user does not exist 
    controller.users.get(req.body, function(err, response) {
      if (err) {
        console.log(err);
      } else {
        if (response === undefined) {
          controller.users.post(req.body, function(err, response) {
            if (err) {
              console.log(err);
            } else {
              res.send(response); 
            }
          });
        }
      }
    });
   } 
 }
  
//logout