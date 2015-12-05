/*global require, module, console*/
var User = require('../models/user'),
	Occupation = require('../models/occupation'),
	Message = require('../config/message');

var usersController = {
	list: function (req, res, next) {
		'use strict';
		
		User.list(function (rows, err) {
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
		
		User.get(id, function (rows, err) {
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
		
		User.remove(id, function (rows, err) {
			if (!err) {
				res.send(Message.status(202, 'Sucesso', res));
			} else {
				res.send(Message.status(500, 'Remove falhou', res));
			}
		});
	},
	create: function (req, res, next) {
		'use strict';
		
		var user = new User();
		user.name = req.body.name;
		user.cpf = req.body.cpf;
		user.occupation = new Occupation(req.body.occupation.id);

		user.save(function (rows, err) {
			if (!err) {
				res.send(Message.status(201, 'Sucesso', res));
			} else {
				res.send(Message.status(500, 'Create falhou', res));
			}
		});
	},
	update: function (req, res, next) {
		'use strict';
		
		var user = {
			id: req.body.id,
			name: req.body.name,
			cpf: req.body.cpf,
			occupation: new Occupation(req.body.occupation.id)
		};
		
		User.save(user, function (rows, err) {
			if (!err) {
				res.send(Message.status(200, 'Sucesso', res));
			} else {
				res.send(Message.status(500, 'Update falhou', res));
			}
		});
	}
};

module.exports = usersController;