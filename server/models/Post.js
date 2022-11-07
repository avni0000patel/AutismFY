const { Schema, model } = require('mongoose');

const postSchema = new Schema({
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
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = model('Post', postSchema);

module.exports = Post;
