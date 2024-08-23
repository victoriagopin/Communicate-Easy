const {Schema, Types, model} = require('mongoose');

const messageSchema = new Schema({
    sender: {
        type: Types.ObjectId,
        ref : 'User'
    },
    content: {
        type: String,
        required: true
    },
    timestamp : {
        type: Date,
        default: Date.now
    },
    read: {
        type : Boolean,
        default: false
    }
});

const chatSchema = new Schema({
    participants: [{
        type: Types.ObjectId,
        ref : 'User'
    }],
    messages: [messageSchema],
    lastUpdated : {
        type: Date,
        default: Date.now
    }
});

const Chat = model('Chat', chatSchema);

module.exports = {
    Chat
}