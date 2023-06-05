const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { Post } = require("../models");
const { signToken } = require("../utils/auth");


const resolvers = {
    Query: {
        allPosts: async () => {
            return Post.find();
        },
        postById: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
        postsByUser: async(parent, {username}) => {
            return Post.find({ username: username });
        },
        allUsers: async() => {
            return User.find();
        },
        userById: async(parent, { userId }) => {
            return User.findOne({_id: userId });
        }
    },
    Mutation: {
        addUser: async (parent, { firstname, lastname, username, email, password }) => {
            const user = await User.create({ firstname, lastname, username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, { postTitle, postText, username }) => {
            const post = await Post.create({ postTitle, postText, username });
            console.log(post);
            return post;
        },
        addComment: async(parent, {postId, commentBody, username}) => {
            try {
                const post = await Post.findById(postId); //find the specific post
                const createdAt = new Date().toLocaleString();
                post.comments.push(newComment);

                await post.save();

                return post;
            }
            catch (err) {
                console.log(err);
            }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError("No user with this email found!");
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError("Incorrect password!");
            }
            const token = signToken(user);
            return { token, user };
        },
        removeUser: async (parent, { userId }) => {
            return User.findOneAndDelete({ _id: userId });
        },
        removeBook: async (parent, { userId, bookId }) => {
            return User.findOneAndUpdate(
                { _id: userId },
                { $pull: { savedBooks: { bookId: bookId } } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;