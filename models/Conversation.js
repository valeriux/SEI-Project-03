const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const conversationSchema = new mongoose.Schema({
  cabin: { type: mongoose.Schema.ObjectId, ref: 'Cabin' },
  between: {
    type: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],

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
