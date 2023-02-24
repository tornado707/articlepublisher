const config = require('./config');
const mongoose = require('mongoose');

module.exports = function() {

	const db = mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

	require('../app/models/user.server.model');
	require('../app/models/article.server.model');

	return db;
}