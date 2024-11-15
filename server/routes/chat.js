const {Chat} = require('../models/Chat');
const {Router} = require('express');

const chatRouter = Router();

chatRouter.get('/chat' ,async (req, res) => {
    const participants = req.headers['x-participants']?.split(',');
     
    let chat = await Chat.findOne({
        participants: { $all : participants}
    });

    res.json(chat);
});

chatRouter.post('/chat', async (req, res) => {
    const { participants, sender, content } = req.body;
    
    let chat = await Chat.findOne({
        participants:  { $all : participants}
    });

    if(!chat){
        console.log('no chat');
        chat = new Chat({
            participants,
            messages: [{
                sender, content,
                timestamp: new Date(),
                read : false
            }],
            lastUpdated: new Date()
        })
    } else {
        const newMessage = {
            sender, 
            content,
            timestamp : new Date(),
            read: false
        };
        chat.messages.push(newMessage);
        chat.lastUpdated = new Date();
    }

    await chat.save();

    res.json(chat);
})

module.exports = {chatRouter} 