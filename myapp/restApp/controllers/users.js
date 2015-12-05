/*global require, module*/
var User = require('../models/user'),
	Occupation = require('../models/occupation'),
	pathService = 'http://localhost:3001';

var usersController = {
	index: function (req, res, next) {
		'use strict';
		
		User.list(pathService.concat('/users'), function (data, response) {
			if (response.statusCode === 200) {
				res.render('user/index', { users: data });
			} else {
				res.status(response.statusCode).send('Ops! Index falhou.');
			}
		});
	},
	add: function (req, res, next) {
		'use strict';
		
		Occupation.list(pathService.concat('/occupations'), function (data, response) {
			if (response.statusCode === 200) {
				res.render('user/add', { occupations: data });
			} else {
				res.status(response.statusCode).send('Ops! Add falhou.');
			}
		});
	},
	create: function (req, res, next) {
		'use strict';
		
		var user = new User();
		user.name = req.body.name;
		user.cpf = req.body.cpf;
		user.occupation = new Occupation(req.body.occupationId);
		
		user.save(pathService.concat('/user/create'), function (data, response) {
			if (response.statusCode === 201) {
				res.redirect('/users');
			} else {
				res.status(response.statusCode).send('Ops! Create falhou.');
			}
		});
	},
	edit: function (req, res, next) {
		'use strict';
		
		Occupation.list(pathService.concat('/occupations'), function (occupations, response) {
			if (response.statusCode === 200) {
				User.get(pathService.concat('/user/', req.params.id), function (data, response) {
					if (response.statusCode === 200) {
						data[0].occupations = occupations;
						res.render('user/edit', data[0]);
					} else {
						res.status(response.statusCode).send('Ops! Edit user falhou.');
					}
				});
			} else {
				res.status(response.statusCode).send('Ops! Edit falhou.');
			}
		});
	},
	udpate: function (req, res, next) {
		'use strict';
		
		var user = {
			id: req.body.id,
			name: req.body.name,
			cpf: req.body.cpf,
			occupation: new Occupation(req.body.occupationId)
		};
		
		User.save(user, pathService.concat('/user/update'), function (data, response) {
			if (response.statusCode === 200) {
				res.redirect('/users');
			} else {
				res.status(response.statusCode).send('Ops! Update falhou.');
			}
		});
	},
	remove: function (req, res, next) {
		'use strict';

		User.remove(pathService.concat('/user/', req.params.id, '/remove'), function (data, response) {
			if (response.statusCode === 202) {
				res.redirect('/users');
			} else {
				res.status(response.statusCode).send('Ops! Remove falhou.');
			}
		});
	}
};

module.exports = usersController;