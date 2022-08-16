const Ticket = require('../models/ticket')
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
    if (err) return res.redirect('/flights/new')
    res.redirect('/flights')
  })
}

function show(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    Ticket.find({ flight: flight._id }, function (err, tickets) {
      res.render('flights/show', {
        flight,
        tickets,
      })
    })
  })
}

module.exports = {
  index,
  new: newFlight,
  create,
  show,
}
