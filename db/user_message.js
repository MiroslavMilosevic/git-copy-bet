const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewUserMessageSchema = new Schema
    ({
        username: {
            type: String,
            required: true
        },
        message_text: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        }
    }, { timestamps: true });

const User_message = mongoose.model('user_message', NewUserMessageSchema);

module.exports = User_message;