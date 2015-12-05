/*global require, module*/
var Occupation = require('../models/occupation'),
	pathService = 'http://localhost:3001';

var occupationController = {
	index: function (req, res, next) {
		'use strict';

		Occupation.list(pathService.concat('/occupations'), function (data, response) {
			if (response.statusCode === 200) {
				res.render('occupation/index', { occupations: data });
			} else {
				res.status(response.statusCode).send('Ops! Index falhou.');
			}
		});
	},
	add: function (req, res, next) {
		'use strict';
		
		res.render('occupation/add');
	},
	create: function (req, res, next) {
		'use strict';
		
		var occupation = new Occupation();
		occupation.name = req.body.name;
		
		occupation.save(pathService.concat('/occupation/create'), function (data, response) {
			if (response.statusCode === 201) {
				res.redirect('/occupations');
			} else {
				res.status(response.statusCode).send('Ops! Create falhou.');
			}
		});
	},
	edit: function (req, res, next) {
		'use strict';
		
		Occupation.get(pathService.concat('/occupation/', req.params.id), function (data, response) {
			if (response.statusCode === 200) {
				res.render('occupation/edit', data[0]);
			} else {
				res.status(response.statusCode).send('Ops! Edit falhou.');
			}
		});
	},
	udpate: function (req, res, next) {
		'use strict';
		
		var occupation = {
			id: req.body.id,
			name: req.body.name
		};
		
		Occupation.save(occupation, pathService.concat('/occupation/update'), function (data, response) {
			if (response.statusCode === 200) {
				res.redirect('/occupations');
			} else {
				res.status(response.statusCode).send('Ops! Update falhou.');
			}
		});
	},
	remove: function (req, res, next) {
		'use strict';
		
		Occupation.remove(pathService.concat('/occupation/', req.params.id, '/remove'), function (data, response) {
			if (response.statusCode === 202) {
				res.redirect('/occupations');
			} else {
				res.status(response.statusCode).send('Ops! Remove falhou.');
			}
		});
	}
};

module.exports = occupationController;