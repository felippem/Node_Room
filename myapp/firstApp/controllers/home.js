/*global module*/

var homeController = {
	index: function (req, res, next) {
		'use strict';
		
		res.render('home/index', { title: 'Felippe Medeiros' });
	}
};

module.exports = homeController;