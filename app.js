var http = require('http');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var userController = require('./Controller/user.controller');
var postController = require('./Controller/post.controller');
var app = express();

mongoose.connect('mongodb://localhost:27017/student',{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// for usermodel
app.get('/user',userController.getUsers);
app.get('/users',userController.getAllUsers);
app.post('/users',userController.addUser);
app.get('/users/:id',userController.getUsersById);
app.delete('/users/:id',userController.deleteUserById);
app.put('/users/:id',userController.updateUser);
//app.get('/users/:id',userController.getPostByUser);


//for postmodel

app.post('/post',postController.addPost);
app.get('/post/:id',postController.getPostByUserId);
app.put('/posts/:id',postController.updatePostByUserId);
app.delete('/posts/:id',postController.deletePostByUserId);
app.get('/post',postController.getAllPost);
app.delete('/post/:id',postController.deletePostByPostId);
app.put('/post/:id',postController.updatePostByPostId);


app.listen(3000);
console.log('server is running at http://localhost:3000/');