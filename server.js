var Express = require('express');
var Mongoose = require('mongoose');
var BodyParser = require('body-parser');
var User = require('./library/models/usersModel.js');  //. means current directory and .. means parent directory

var app = Express();
var port = 9901;
var mongoUri = "mongodb://localhost:27017/clients-users"; //don't necessarily need port number if using default port 27017

Mongoose.connect(mongoUri);
Mongoose.connection.once('open', function(){
	console.log('connected to database @ ' + mongoUri);
})

app.use(BodyParser.json());


app.post('/api/user', function(req, res){   //setting up post to particular endpoint
	User.create(req.body).then(function(response){ //create method returns a promise so you can use .then
		res.status(200).json(response);
		console.log(response); //this will console log info passed in as json object to "post" in postman
	},
	function(err){
		res.status(500).json(err);
	}) 
});

app.get('/api/users', function(req, res){
	User.find({}, function(err, docs){
		if(!err){
			if(docs.length === 0) {
				res.status(404).send('No Documents found')
		} else {
				res.status(200).json(docs);
			}
		} else {
			res.status(500).json(err);
		}
	})
})










app.listen(port, function(){
	console.log("Listening on port " + port);
});












// app.listen(port);
// console.log("Listening on port" + port);

