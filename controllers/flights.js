const flight = require('../models/flight')
const Flight = require('../models/flight')

function index(req, res) {
  Flight.find({}, function (err, flights) {
    res.render('flights/', { title: 'All Flights', flights })
  })
}
function newFlight(req, res) {
  const newFlight = new Flight()
  const dt = newFlight.departs
  const departsDate = dt.toISOString().slice(0, 16)
  res.render('flights/new', { title: 'Add Flight', departsDate })
}

function create(req, res) {
  const flight = new Flight(req.body)
  flight.save(function (err) {
    console.log(err)
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}

module.exports = {
  index,
  new: newFlight,
  create,
}
