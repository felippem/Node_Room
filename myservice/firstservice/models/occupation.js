/*global require, module*/
var db = require('../db/connection');

var Occupation = function (id) {
	'use strict';
	
	this.id = id;
	this.name = null;
	
	this.save = function (occupation, callback) {
		Occupation.save(occupation, callback);
	};
};

Occupation.save = function (occupation, callback) {
	'use strict';
	
	var query = null;
	
	if (occupation.id) {
		query = "update occupations set name = '" + occupation.name + "' where id = " + occupation.id;
	} else {
		query = "insert into occupations (name) values ('" + occupation.name + "')";
	}
	
	db.exec(query, callback);
};

Occupation.list = function (callback) {
	'use strict';
	
	db.exec('select * from occupations', callback);
};

Occupation.get = function (id, callback) {
	'use strict';
	
	if (!id || id <= 0) {
		return;
	}
	
	db.exec('select * from occupation where id = '.concat(id), callback);
};

Occupation.remove = function (id, callback) {
	'use strict';
	
	if (!id || id <= 0) {
		return;
	}
	
	db.exec('delete from occupation where id = '.concat(id), callback);
};

module.exports = Occupation;