/*global require, module*/
var User = require('../models/user'),
	Occupation = require('../models/occupation'),
	Message = require('../config/message');

var usersController = {
	users: function (req, res, next) {
		'use strict';
		
		User.list(function (rows, err) {
			if (!err) {
				res.send(rows);
			} else {
				res.send(Message.status(500, 'Index falhou'));
			}
		});
	},
	user: function (req, res, next) {
		'use strict';
		
		var id = req.params.id;
		
		if (!parseInt(+id, 10) || id <= 0) {
			res.send(Message.status(500, 'Id não encontrado'));
			return;
		}
		
		User.get(id, function (rows, err) {
			if (!err) {
				res.send(rows);
			} else {
				res.send(Message.status(500, 'User falhou'));
			}
		});
	}
};

module.exports = usersController;