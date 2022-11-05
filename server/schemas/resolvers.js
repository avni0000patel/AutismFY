const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).select('-__v -password').populate('thoughts');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        posts: async () => {
            return Post.find();
        },
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId });
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        },
        addPost: async (parent, { postId }) => {
            return Post.create({ _id: postId });
        },
        addCaption: async (parent, { postId, caption }) => {
            return Post.findOneAndUpdate(
                { _id: postId },
                {
                    $addToSet: { captions: caption },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removePost: async (parent, { postId }) => {
            return Post.findOneAndDelete({ _id: postId });
        },
        removeCaption: async (parent, { postId, caption }) => {
            return Post.findOneAndUpdate(
                { _id: postId },
                { $pull: { captions: caption } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;
