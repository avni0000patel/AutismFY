const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const postSchema = new Schema({
    captions: {
        type: String,
        trim: true,
    },
    image: {
        type: String
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;