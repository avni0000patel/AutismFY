const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trime: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        trime: true,
        minlength: 3
    }
});
const User = mongoose.model("User", userSchema);
module.exports = User;