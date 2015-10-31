/*global require, module*/

var User = require('../models/user'),
	Occupation = require('../models/occupation');

var usersController = {
	index: function (req, res, next) {
		'use strict';
		
		User.list(function (rows, err) {
			if (!err) {
				res.render('user/index', { users: rows });
			} else {
				res.send('Ops! ' + err.message, 500);
			}
		});
	},
	add: function (req, res, next) {
		'use strict';
		
		Occupation.list(function (rows, err) {
			if (!err) {
				res.render('user/add', { occupations: rows });
			} else {
				res.send('Ops! ' + err.message, 500);
			}
		});
	},
	create: function (req, res, next) {
		'use strict';
		
		var user = new User();
		user.name = req.param('name');
		user.cpf = req.param('cpf');
		user.occupation = new Occupation(req.param('occupationId'));
		
		user.save(function (rows, err) {
			if (!err) {
				res.redirect('/users');
			} else {
				res.send('Ops! ' + err.message, 500);
			}
		});
	},
	edit: function (req, res, next) {
		'use strict';
		
		Occupation.list(function (occupations, err) {
			if (!err) {
				User.get(req.param('id'), function (rows, err) {
					if (!err) {
						rows[0].occupations = occupations;
						res.render('user/edit', rows[0]);
					} else {
						res.send('Ops! ' + err.message, 500);
					}
				});
			} else {
				res.send('Ops! ' + err.message, 500);
			}
		});
	},
	udpate: function (req, res, next) {
		'use strict';
		
		var user = {
			id: req.param('id'),
			name: req.param('name'),
			cpf: req.param('cpf'),
			occupation: new Occupation(req.param('occupationId'))
		};
		
		User.save(user, function (rows, err) {
			if (!err) {
				res.redirect('/users');
			} else {
				res.send('Ops!' + err.message, 500);
			}
		});
	},
	remove: function (req, res, next) {
		'use strict';

		User.remove(req.param('id'), function (rows, err) {
			if (!err) {
				res.redirect('/users');
			} else {
				res.send('Ops!' + err.message, 500);
			}
		});
	}
};

module.exports = usersController;