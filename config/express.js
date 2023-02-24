const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const config = require('./config');
const http = require('http');
const socketio = require('socket.io')(process.env.SOCKET_IO_PORT);
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const passport = require('passport');
const path = require('path');
const configureSocket = require('./socketio');

module.exports = function(db) {
	const app = express();
	const server = http.createServer(app);
	const io = socketio.listen(server);

	if(process.env.NODE_ENV === 'developemnt') {
		app.use(morgan('dev'));
	}else if(process.env.NODE_ENV === 'production') {
		app.use(compress());
	}

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json());
	app.use(methodOverride());

	const mongoStore = new MongoStore({
		mongooseConnection: db.connection
	});

	app.use(session({
		saveUninitialized: true,
		resave: true,
		secret: config.sessionSecret,
		store: mongoStore
	}));

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

	app.use(flash());
	app.use(passport.initialize());
	app.use(passport.session());

	app.use('/', express.static(path.resolve('./public')));
	app.use('/lib', express.static(path.resolve('./node_modules')));

	require('../app/routes/users.server.routes.js') (app);
	require('../app/routes/articles.server.routes.js') (app)
	require('../app/routes/index.server.routes.js') (app);

	configureSocket(server, io, mongoStore);

	return server;
};