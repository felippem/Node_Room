/*global require, module*/
var express = require('express'),
	usersController = require('../controllers/users');

var router = express.Router();

router.get('/', function (req, res, next) {
  'use strict';
	
	res.render('index', { title: 'firstService REST' });
});

router.get('/users', usersController.users);
router.get('/user/:id', usersController.user);

module.exports = router;