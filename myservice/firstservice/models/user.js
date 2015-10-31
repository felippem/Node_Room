/*jslint nomen: true*/
/*global require, module*/
var db = require('../db/connection');

var User = function () {
	'use strict';
	this.id = null;
	this.name = null;
	this.cpf = null;
	this.occupation = {};
	
	this.isValid = function () {
		if (!this.name || !this.cpf) {
			return false;
		}
		
		return true;
	};
};

User.list = function (callback) {
	'use strict';
	db.exec('select * from users', callback);
};

module.exports = User;