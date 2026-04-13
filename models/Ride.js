const mongoose = require('mongoose')

const RideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  Location: String,
  Price: Number
})

module.exports = mongoose.model('Ride', RideSchema)
