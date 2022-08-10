const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightSchema = new Schema(
 {
  airline:{
    type: String,
    enum: {
      values: ['American', 'SouthWest', 'United'],
      message: '{VALUE} is not supported'
    },
  airport:{
    type: String,
    enum: {
      values: ['AUS', 'DFW'],
      message: '{VALUE} is not supported'
    },
  flightNo: {
    type: Number,
    min: [10, 'Flight Number Too Low'],
    max: 9999
  }
 }
)

module.exports = mongoose.model('flight', movieSchema)