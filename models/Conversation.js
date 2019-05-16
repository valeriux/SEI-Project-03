const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// 1st created conversation model
const conversationSchema = new mongoose.Schema({
  cabin: { type: mongoose.Schema.ObjectId, ref: 'Cabin' },
  between: {
    // refers to ids of person writing the message and the user (another user). Made user unique as previously when I talked to myself, I was getting 2Xs conversation tabs/notifications one for the owner of the cabin and one for the enquirer/correspondent.
    type: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    // if the first id is the same as the second, you shouldn't be able to message yourself
    validate: {
      validator: (value) => {
        return !value[0].equals(value[1])
      },
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
