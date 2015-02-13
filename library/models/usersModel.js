var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true},
	email: {type: String, required: true, uniqueness: true},
	addresses: [{ 
		address: {type: String, required: false},
		city: {type: String},
		state: {type: String},
		zip: {type: String},
		kind: {type: String, enum: ['Shipping', 'Billing', 'Both']},
			// default: 'Both',
	}],
	age: {type: Number, required: true, min: 69}
});

module.exports = Mongoose.model('User', schema); //just a way to reference this model in the future. Called 'User'




