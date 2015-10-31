/*global require, module*/

var express = require('express'),
	homeController = require('../controllers/home'),
	usersController = require('../controllers/users'),
	occupationsController = require('../controllers/occupations');

var router = express.Router();

router.get('/', homeController.index);

router.get('/users', usersController.index);
router.get('/user/add', usersController.add);
router.post('/user/create', usersController.create);
router.get('/user/:id/edit', usersController.edit);
router.post('/user/update', usersController.udpate);
router.get('/user/:id/remove', usersController.remove);

router.get('/occupations', occupationsController.index);
router.get('/occupation/add', occupationsController.add);
router.post('/occupation/create', occupationsController.create);
router.get('/occupation/:id/edit', occupationsController.edit);
router.post('/occupation/update', occupationsController.udpate);
router.get('/occupation/:id/remove', occupationsController.remove);

module.exports = router;