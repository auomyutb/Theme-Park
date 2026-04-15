const mongoose = require("mongoose")

const ThemeSchema = new mongoose.Schema({
  parkName: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  picture : {
    type: String }
})

module.exports = mongoose.model("Theme", ThemeSchema)
