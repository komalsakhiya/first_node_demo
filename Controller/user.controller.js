var userModel= require("../model/user.model");
var postModel = require("../model/post.model");
var userController = {};

userController.getUsers = function(req,res){
	userModel.find({age:{$lt:18},bankbalance:{$lt:5000}},function(err,users){
		if (err){
			res.status(500).send(err);
		}

		res.status(200).send(users);
	})
}


userController.getAllUsers = function(req,res){
	userModel.find({},function(err,users){
		if (err){
			res.status(500).send(err);
		}

		res.status(200).send(users);
	})
}

userController.addUser = function(req,res){
 	var user = new userModel(req.body);

 	user.save(function(err,user){
 		if (err){
			res.status(500).send(err);
		}

		res.status(201).send(user);

 	})
}

userController.getUsersById = function(req,res){
	userModel.findOne({_id:req.params.id},function(err,user){
		if(err){
			res.status(500).send(err);
		}
		res.status(200).send(user);
	})
}







userController.deleteUserById = function(req,res){
	//var userId = req.pramas.id;
	userModel.findByIdAndRemove({_id:req.params.id},function(err,user){
		if(err){
			res.status(500).send(err);
		}
			res.status(200).send(user);
		
	})
}

userController.updateUser = function(req,res){
	//var userId = req.body.userId;
	userModel.findByIdAndUpdate({_id:req.params.id},{$set:req.body},function(err,user){
		if(err){
			res.status(500).send(err);
		}
		res.status(200).send(user);

	})
}



module.exports = userController;