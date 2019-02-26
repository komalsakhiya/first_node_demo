var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var postSchema = new Schema({
	author: {type: Schema.Types.ObjectId , ref:'user'},
	content:String,
	date: {type: Date, default: new Date()},
	public: {type: Boolean, default: true}
});
module.exports = mongoose.model("post",postSchema);
