process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.MONGO_URI = 'mongodb://127.0.0.1:27017/mean-book';
process.env.SOCKET_IO_PORT = 4000;

const configureMongoose = require('./config/mongoose');
const configureExpress = require('./config/express');
const configurePassport = require('./config/passport')

const db = configureMongoose();
const app = configureExpress(db);
const passport = configurePassport();

app.listen(3000);

console.log('Server running at http://localhost:3000/')

module.exports = app;