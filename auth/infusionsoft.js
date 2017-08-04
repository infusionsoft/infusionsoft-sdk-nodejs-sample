var passport 		= require('passport'),
	InfusionsoftStrategy  = require('passport-infusionsoft').Strategy;
	
var env				= process.env.NODE_ENV || "development",
	config		 	= require('../config')[env],
	infusionsoft	= config.infusionsoft;

passport.use(new InfusionsoftStrategy({
        clientID: infusionsoft.clientId,
        clientSecret: infusionsoft.clientSecret,
        callbackURL: config.serverAddress + ":" + config.port + "/auth/infusionsoft/callback"
    },
  function(accessToken, refreshToken, profile, done) {
    var tokens = {
	  accessToken: accessToken,
	  refreshToken: refreshToken
    };
	return done(null, tokens);
  }
));

passport.serializeUser(function(user, done) {
	done(null, JSON.stringify(user));
});

passport.deserializeUser(function(user, done) {
	done(null, JSON.parse(user));		
});

module.exports = passport; 
