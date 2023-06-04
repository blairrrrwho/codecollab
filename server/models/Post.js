const { Schema, model } = require('mongoose');


const commentSchema = new Schema(
  {
    commentId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    commentBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
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
    postText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now
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