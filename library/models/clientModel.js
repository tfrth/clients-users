var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var schema = new Schema({
	name: {type: String, required: true, uniqueness: false},
	value: {type: Number},
	contract_length: {type: Number}
});
