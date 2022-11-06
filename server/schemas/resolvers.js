const { Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).select('-__v -password').populate('thoughts');
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        profiles: async () => {
            return Profile.find();
        },

        profile: async (parent, { profileId }) => {
            return Profile.findOne({ _id: profileId });
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
        addProfile: async (parent, { name }) => {
            return Profile.create({ name });
        },
        addCaption: async (parent, { profileId, caption }) => {
            return Profile.findOneAndUpdate(
                { _id: profileId },
                {
                    $addToSet: { captions: caption },
                },
                {
                    new: true,
                    runValidators: true,
                }
            );
        },
        removeProfile: async (parent, { profileId }) => {
            return Profile.findOneAndDelete({ _id: profileId });
        },
        removeCaption: async (parent, { profileId, caption }) => {
            return Profile.findOneAndUpdate(
                { _id: profileId },
                { $pull: { captions: caption } },
                { new: true }
            );
        },
    },
};

module.exports = resolvers;
