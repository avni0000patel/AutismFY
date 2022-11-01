const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trime: true,
        minlength: 3
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