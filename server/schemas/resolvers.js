const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { Post } = require("../models");
const { signToken } = require("../utils/auth");

// imported schema dummy files from my challenge 21; will have to rework the code 
const resolvers = {
    Query: {
        allPosts: async () => {
            return Post.find();
        },
        postById: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
        postsByUser: async(parent, {username}) => {
            return Post.findOne({ username: username });
        }
    },
    Mutation: {
        addUser: async (parent, { firstname, lastname, username, email, password }) => {
            const user = await User.create({ firstname, lastname, username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, { postText, username }) => {
            const post = await Post.create({ postText, username });
            console.log(post);
            return post;
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