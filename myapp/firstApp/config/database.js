/*global module*/

var config = {
	user: 'root',
	password: 'root',
	connectionString: function () {
		'use strict';
		
		return 'mysql://' + config.user + ':' + config.password + '@localhost/firstapp';
	}
};

module.exports = config;