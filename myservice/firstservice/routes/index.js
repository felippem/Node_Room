/*global require, module*/
var express = require('express'),
	usersController = require('../controllers/users');

var router = express.Router();

router.get('/', function (req, res, next) {
  'use strict';
	
	res.render('index', { title: 'firstService RESTApi' });
});

router.get('/users', usersController.index);

module.exports = router;