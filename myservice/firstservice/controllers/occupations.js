/*global require, module, console*/
var Occupation = require('../models/occupation'),
	Message = require('../config/message');

var occupationsController = {
	list: function (req, res, next) {
		'use strict';
		
		Occupation.list(function (rows, err) {
			if (!err) {
				res.send(rows);
			} else {
				res.send(Message.status(500, 'List falhou', res));
			}
		});
	},
	get: function (req, res, next) {
		'use strict';
		
		var id = req.params.id;
		
		if (!parseInt(+id, 10) || id <= 0) {
			res.send(Message.status(400, 'Id inválido', res));
			return;
		}
		
		Occupation.get(id, function (rows, err) {
			if (!err) {
				res.send(rows);
			} else {
				res.send(Message.status(500, 'Get falhou', res));
			}
		});
	},
	remove: function (req, res, next) {
		'use strict';
		
		var id = req.params.id;
		
		if (!parseInt(+id, 10) || id <= 0) {
			res.send(Message.status(400, 'Id inválido', res));
			return;
		}
		
		Occupation.remove(id, function (rows, err) {
			if (!err) {
				res.send(Message.status(202, 'Sucesso', res));
			} else {
				res.send(Message.status(500, 'Remove falhou', res));
			}
		});
	},
	create: function (req, res, next) {
		'use strict';
		
		var occupation = new Occupation();
		occupation.name = req.body.name;

		occupation.save(occupation, function (rows, err) {
			if (!err) {
				res.send(Message.status(201, 'Sucesso', res));
			} else {
				res.send(Message.status(500, 'Create falhou', res));
			}
		});
	},
	update: function (req, res, next) {
		'use strict';
		
		var occupation = {
			id: req.body.id,
			name: req.body.name
		};
		
		Occupation.save(occupation, function (rows, err) {
			if (!err) {
				res.send(Message.status(200, 'Sucesso', res));
			} else {
				res.send(Message.status(500, 'Update falhou', res));
			}
		});
	}
};

module.exports = occupationsController;