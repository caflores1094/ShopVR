var router = require('express').Router();
//TODO: need to get the right controller
var controller = require('./Controllers');

router.get('/auth/login',  controller.auth.login);

router.get('/auth/logout', controller.auth.logout);

module.exports = router;