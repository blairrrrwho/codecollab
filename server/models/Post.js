const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const commentSchema = new Schema(
  {
    // commentId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId()
    // },
    commentBody: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  }
);

const postSchema = new Schema(
  {
    postTitle:{
      type: String, 
      required: true,
      minLength: 1,
      maxLength: 30,
    },
    postText: {
      type: String,
      required: true,
      minLength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true
    },
    comments: [commentSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    },
    id: false
  }
);

postSchema.virtual('commentCount').get(function () {
  return this.reactions.length;
})

const Post = model('Post', postSchema);

module.exports = Post;