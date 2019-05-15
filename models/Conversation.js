const mongoose = require('mongoose')
// 1st created conversation model
const conversationSchema = new mongoose.Schema({
  cabin: { type: mongoose.Schema.ObjectId, ref: 'Cabin' },
  between: [{type: mongoose.Schema.ObjectId, ref: 'User'}], // refers to ids of person writing the message and the user (another user)
  messages: [{
    content: {type: String, required: true},
    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
  }]
})

module.exports = mongoose.model('Conversation', conversationSchema)
