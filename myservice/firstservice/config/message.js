/*global require, module*/
var message = {
	status: function (code, text) {
		'use strict';
		
		return {
			status_code: code,
			message: text
		};
	}
};

module.exports = message;