/*global require, module*/

var db = require('../db/connection');

var User = function () {
	'use strict';
	
	this.id = null;
	this.name = null;
	this.cpf = null;
	this.occupation = {};
	
	this.save = function (callback) {
		User.save(this, callback);
	};
};

User.save = function (user, callback) {
	'use strict';
	
	var query = null;
	
	if (user.id) {
		query = "update users set name = '" + user.name + "', cpf = '" + user.cpf + "', occupationId = '" + user.occupation.id + "' where id = " + user.id;
	} else {
		query = "insert into users (name, cpf, occupationId) values ('" + user.name + "', '" + user.cpf + "', " + (!user.occupation.id ? null : user.occupation.id) + ")";
	}
	
	db.cnn.exec(query, callback);
};

User.list = function (callback) {
	'use strict';
	
	db.cnn.exec('select * from users', callback);
};

User.get = function (id, callback) {
	'use strict';
	
	if (!id || id <= 0) {
		return;
	}
	
	db.cnn.exec('select * from users where id = ' + id, callback);
};

User.remove = function (id, callback) {
	'use strict';

	if (!id || id <= 0) {
		return;
	}
	
	db.cnn.exec('delete from users where id = ' + id, callback);
};

module.exports = User;