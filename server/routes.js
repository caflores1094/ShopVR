var router = require('express').Router();
//TODO: need to get the right controller
var controller = require('./controllers');

router.get('/auth/login', controller.login);

// router.post('/auth/logout', controller.auth.logout);

module.exports = router;