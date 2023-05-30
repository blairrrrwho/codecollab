const Comment = require("./Comment");

const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    postText: {
        type: String, 
        required: true,
        min: 1,
        max: 250,
    },
    username: {
        type: String,
        required: true

    },
    comments: [Comment.schema] //indicates that any comments will be subdocuments 
    
})