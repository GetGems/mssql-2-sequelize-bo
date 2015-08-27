'use strict';

var db2sequelize = require('./lib');

var config = {
	server: '',
	userName: '',
	password: '',
	options: {
		database: '',
		encrypt: true
	}
};

var filepath = './generated';

db2sequelize(config, filepath, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log("done.");
	}
});
