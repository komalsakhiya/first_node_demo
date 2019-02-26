var postModel = require("../model/post.model");
var userModel = require("../model/user.model");
var postController = {};


postController.addPost = function(req,res){
	var post = new postModel(req.body);
	var user = new userModel(req.body);
	var userId = req.body.author;
	post.save(function(err,post){
		
		if (err){
			res.status(500).send(err);
		}
		console.log(err,post);

		userModel.findOne({_id:userId},function(err,user){
			console.log(userId);
			if(err){
				res.send(500);
			}
			user.post.push(post._id);
			user.save()
			res.status(201).send(post);
		});
	})

}

postController.getPostByUserId = function(req,res){
	//console.log("req.params =========+>" , req.params);
	postModel.find({author:req.params.id})
	.populate('author')
	.exec(function(err,foundUser){
		if (err) {
			res.status(500).send(err);
		}
		res.send(foundUser);
	})
}

postController.getAllPost = function(req,res){
	postModel.find({},function(err,post){
		if(err){
			res.status(500).send(201);
		}
		res.send(post);
	})
}


postController.deletePostByPostId = function(req,res){
	postModel.findByIdAndRemove({_id:req.params.id},function(err,post){
		if(err){
			res.status(500).send(err);
		}
			res.status(200).send(post);
		
	})
}

postController.updatePostByPostId = function(req,res){
	postModel.findByIdAndUpdate({_id:req.params.id},{$set:req.body},function(err,post){
		if(err){
			res.status(500).send(err);
		}
			res.status(200).send(post);
		
	})
}

postController.updatePostByUserId = function(req,res){
	userModel.find({_id:req.params.id},console.log("user id======>",req.params.id),function(err,post){

	})
	postModel.findOneAndUpdate({author:req.params.id},req.body,{upser:true,new:true},function(err,post){
		if(err){
			res.status(500).send(err);
		}
		res.status(200).send(post);

	});

}

postController.deletePostByUserId = function(req,res){
	userModel.find({_id:req.params.id},console.log("user id======>",req.params.id),function(err,post){

	})
	postModel.findOneAndRemove({author:req.params.id},function(err,post){
		if(err){
			res.status(500).send(err);
		}
		res.status(200).send(post);

	});

}





module.exports = postController; 	 