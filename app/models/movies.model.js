const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  gender: [{
    type: String, required: true
  }],
  rank: { type: Number, required: true },
})

module.exports = mongoose.model('Movie', MovieSchema)