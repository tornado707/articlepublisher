const users = require('../../app/controllers/users.server.controller');
const passport = require('passport');

module.exports = function(app) {
     app.route('/api/auth/signup').post(users.signup);
     app.route('/api/auth/signin').post(users.signin);
     app.route('/api/auth/signout').get(users.signout);

     app.get('/api/oauth/twitter', passport.authenticate('twitter', {
          failureRedirect: '/signin'
     }));

     app.get('/api/oauth/twitter/callback', passport.authenticate('twitter', {
          failureRedirect: '/signin',
          successRedirect: '/'
     }));
};