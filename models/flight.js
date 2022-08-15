const mongoose = require('mongoose')
const Schema = mongoose.Schema

const destinationSchema = new Schema({
  airport: {
    type: String,
    require: true,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
  },
  arrival: {
    type: Date,
    require: true,
  },
})

const curDate = new Date()
const flightSchema = new Schema(
  {
    airline: {
      type: String,
      required: true,
      enum: ['American', 'Southwest', 'United'],
      default: 'n/a',
    },
    airport: {
      type: String,
      required: true,
      enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN'],
      default: 'DEN',
    },
    flightNo: {
      type: Number,
      required: true,
      min: 10,
      max: 9999,
      Default: 'n/a',
    },
    departs: {
      type: Date,
      required: true,
      default: curDate.setFullYear(curDate.getFullYear() + 1),
    },
    destinations: [destinationSchema],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Flight', flightSchema)
