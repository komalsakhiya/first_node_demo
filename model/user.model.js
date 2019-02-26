var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
	name: String,
	email:String,
	mobile:String,
	DOB:String,
	// gender:String,
	// city:String,
	// state:String,
	// country:String,
	// bankbalance:Number,
	// age:Number,
	post: [{type: Schema.Types.ObjectId , ref:'post'}],



})
module.exports = mongoose.model("user",userSchema);