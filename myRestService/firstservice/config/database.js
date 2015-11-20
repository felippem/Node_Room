/*global require, module*/
var config = {
	user: 'root',
	password: 'root',
	connectionString: function () {
		'use strict';
		
		return 'mysql://'.concat(config.user, ':', config.password, '@localhost/firstapp');
	}
};

module.exports = config;