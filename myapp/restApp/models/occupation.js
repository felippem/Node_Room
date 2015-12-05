/*global require, module, delete*/
var restClient = require('restler');

var Occupation = function (id) {
	'use strict';
	
	this.id = id;
	this.name = null;
	
	this.save = function (url, callback) {
		Occupation.save(this, url, callback);
	};
};

Occupation.save = function (occupation, url, callback) {
	'use strict';
	
	if (!occupation.id) {
		restClient.putJson(url, occupation).on('complete', function (data, response) {
			callback(data, response);
		});
	} else {
		restClient.postJson(url, occupation).on('complete', function (data, response) {
			callback(data, response);
		});
	}
};

Occupation.list = function (url, callback) {
	'use strict';
	
	restClient.get(url).on('complete', function (data, response) {
		callback(data, response);
	});
};

Occupation.get = function (url, callback) {
	'use strict';
	
	restClient.get(url).on('complete', function (data, response) {
		callback(data, response);
	});
};

Occupation.remove = function (url, callback) {
	'use strict';
	
	restClient.del(url).on('complete', function (data, response) {
		callback(data, response);
	});
};

module.exports = Occupation;