var express = require('express'),
	passport = require('passport'),
	router  = express.Router(),
	contactService = require('../contactService');

router.use(function(req, res, next){
    res.setHeader('Content-Type', 'application/json');
    next();
});

router.get('/contacts',function(req,res){
	
});

module.exports = router;
