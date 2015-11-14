/*jslint es5: true*/
/*global require, module*/
var express = require('express'),
	usersController = require('../controllers/users');

var router = express.Router();

router.get('/', function (req, res, next) {
  'use strict';
	
	res.render('index', { title: 'firstService REST' });
});

router.get('/users', usersController.list);
router.get('/user/:id', usersController.get);
router.delete('/user/:id/remove', usersController.remove);
router.put('/user/create', usersController.create);
router.post('/user/update', usersController.update);

module.exports = router;