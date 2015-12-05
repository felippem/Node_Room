/*global require, module, delete*/
var restClient = require('restler');

var User = function () {
	'use strict';
	
	this.id = null;
	this.name = null;
	this.cpf = null;
	this.occupation = {};
	
	this.save = function (url, callback) {
		User.save(this, url, callback);
	};
};

User.save = function (user, url, callback) {
	'use strict';

	if (!user.id) {
		restClient.putJson(url, user).on('complete', function (data, response) {
			callback(data, response);
		});
	} else {
		restClient.postJson(url, user).on('complete', function (data, response) {
			callback(data, response);
		});
	}
};

User.list = function (url, callback) {
	'use strict';
	
	restClient.get(url).on('complete', function (data, response) {
		callback(data, response);
	});
};

User.get = function (url, callback) {
	'use strict';
	
	restClient.get(url).on('complete', function (data, response) {
		callback(data, response);
	});
};

User.remove = function (url, callback) {
	'use strict';

	restClient.del(url).on('complete', function (data, response) {
		callback(data, response);
	});
};

module.exports = User;