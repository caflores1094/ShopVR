var router = require('express').Router();
//TODO: need to get the right controller
var controller = require('./Controllers');

router.post('/auth/login',  controller.auth.login);

router.post('/auth/logout', controller.auth.logout);

module.exports = router;