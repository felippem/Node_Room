/*global require, module*/
var User = require('../models/user');
var Occupation = require('../models/occupation');

var usersController = {
	index: function (req, res, next) {
		'use strict';
		
		User.list(function (rows, err) {
			if (!err) {
				res.send(rows);
			} else {
				res.send({
					status: 500,
					message: 'Ctrl Users falhou.'
				});
			}
		});
	}
};

module.exports = usersController;