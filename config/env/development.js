module.exports = {
     db: process.env.MONGO_URI,
     sessionSecret: 'developmentSessionSecret1',
     twitter: {
          clientID: 'ENeNwdb5T2wGwuJoQEAUiMzKx',
          clientSecret: 'gmeOZ18iiDqC31vBwD8X8S2ngUwlqcGa5XSqByG1q0DvEBb94m',
          callbackURL: 'http://localhost:3000/oauth/twitter/callback'
     }
};