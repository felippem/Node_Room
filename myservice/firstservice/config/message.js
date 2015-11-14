/*global require, module*/
var message = {
	status: function (code, text, res) {
		'use strict';
		
		if (res) {
			res.status(code);
		}
		
		return {
			status: code,
			message: text
		};
	}
};

module.exports = message;