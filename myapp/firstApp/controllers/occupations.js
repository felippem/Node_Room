/*global require, module*/

var Occupation = require('../models/occupation');

var occupationController = {
	index: function (req, res, next) {
		'use strict';
		
		Occupation.list(function (rows, err) {
			if (!err) {
				res.render('occupation/index', { occupations: rows });
			} else {
				res.send('Ops! ' + err.message, 500);
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
		occupation.name = req.param('name');
		
		occupation.save(function (rows, err) {
			if (!err) {
				res.redirect('/occupations');
			} else {
				res.send('Ops! ' + err.message, 500);
			}
		});
	},
	edit: function (req, res, next) {
		'use strict';
		
		Occupation.get(req.param('id'), function (rows, err) {
			if (!err) {
				res.render('occupation/edit', rows[0]);
			} else {
				res.send('Ops! ' + err.message, 500);
			}
		});
	},
	udpate: function (req, res, next) {
		'use strict';
		
		var occupation = {
			id: req.param('id'),
			name: req.param('name')
		};
		
		Occupation.save(occupation, function (rows, err) {
			if (!err) {
				res.redirect('/occupations');
			} else {
				res.send('Ops!' + err.message, 500);
			}
		});
	},
	remove: function (req, res, next) {
		'use strict';
		
		Occupation.remove(req.param('id'), function (rows, err) {
			if (!err) {
				res.redirect('/occupations');
			} else {
				res.send('Ops!' + err.message, 500);
			}
		});
	}
};

module.exports = occupationController;