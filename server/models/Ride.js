const mongoose = require('mongoose')

const RideSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  thrillLevel: Number
})

module.exports = mongoose.model('Ride', RideSchema)