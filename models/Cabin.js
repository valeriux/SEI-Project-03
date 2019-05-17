const mongoose = require('mongoose')
const rp = require('request-promise')

const uniqueValidator = require('mongoose-unique-validator')

const cabinSchema = new mongoose.Schema({
  title: {type: String, required: true},
  image: { type: String, required: true},
  price: {type: Number, required: true},
  sleeps: { type: Number, required: true},
  address: {type: String, required: true},
  postcode: {type: String, required: true},
  longitude: {type: Number, required: true},
  latitude: {type: Number, required: true},
  description: {type: String, required: true},
  email: {type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

cabinSchema.plugin(uniqueValidator)

cabinSchema.pre('validate', function getLatLng(next) {
  rp({
    url: `https://api.postcodes.io/postcodes?q=${this.postcode}`,
    method: 'GET',
    json: true
  })
    .then(res => {
      if(!res.result) {
        this.invalidate('postcode', 'Invalid postcode')
        return next()
      }
      this.latitude = res.result[0].latitude
      this.longitude = res.result[0].longitude
      next()
    })
    .catch(next)
})

module.exports = mongoose.model('Cabin', cabinSchema)
