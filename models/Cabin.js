const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')

const cabinSchema = new mongoose.Schema({
  title: {type: String, required: true},
  image: { type: String, required: true},
  price: {type: Number, required: true},
  sleeps: { type: Number, required: true},
  address: {type: String, required: true},
  postcode: {type: String, required: true},
  description: {type: String, required: true},
  email: {type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}

})

cabinSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Cabin', cabinSchema)
