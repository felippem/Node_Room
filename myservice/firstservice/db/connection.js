/*global require, module*/
var config = require('../config/database'),
	mysql = require('mysql');

var db = function () {
	'use strict';
};

db.exec = function (query, callback) {
	'use strict';
	
	var connection = mysql.createConnection(config.connectionString());

	connection.query(query, function (err, rows) {
		callback(rows, err);
		connection.end();
	});
};

module.exports = db;