const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const todoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    todoText: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    postAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;
