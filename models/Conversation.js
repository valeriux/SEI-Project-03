const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// 1st created conversation model
const conversationSchema = new mongoose.Schema({
  cabin: { type: mongoose.Schema.ObjectId, ref: 'Cabin' },
  between: {
    // refers to ids of person writing the message and the user (another user). If you make user unique here to resolve getting 2Xs conversation tabs/notifications when I talk to myself, one for the owner of the cabin and one for the enquirer/correspondent.
    type: [{ type: mongoose.Schema.ObjectId, ref: 'User' }], // two users in the between array

    validate: {
      validator: (value) => {
        return !value[0].equals(value[1])
      },   // if the first user in the between array is the same as the second, you shouldn't be able to message yourself
      message: 'You cannot message yourself'
    }
  },
  messages: [{
    content: {type: String, required: true},
    user: {type: mongoose.Schema.ObjectId, ref: 'User'}
  }]
})

conversationSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Conversation', conversationSchema)
