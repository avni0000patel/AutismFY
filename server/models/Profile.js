const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    avatar: {
        type: String
    },
    image: {
        type: String
    },
    captions: {
        type: String,
        trim: true,
    },
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
