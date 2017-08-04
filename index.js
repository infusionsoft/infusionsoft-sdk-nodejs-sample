var		env				= process.env.NODE_ENV || "development",
		config			= require('./config')[env],
		http			= require('http'),
		compression 	= require('compression'),
		cookieSession	= require('cookie-session'),
		bodyParser		= require('body-parser'),
		passport		= require('passport'),
		express			= require('express');

require('./auth/infusionsoft');

var app = express();
app.use(compression());
app.use(cookieSession({ keys: config.cookieSessionKeys }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(__dirname + '/static'));

app.use('/api', require('./routes'));

app.get('/auth/infusionsoft', passport.authenticate('Infusionsoft', { scope: ['full'] }));
app.get('/auth/infusionsoft/callback', passport.authenticate('Infusionsoft', { failureRedirect: '/' }),
	function(req, res){
		res.redirect('/');
	}
);

http.createServer(app).listen(config.port);
console.log("Server starting on "+config.port);