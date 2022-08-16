const Ticket = require('../models/ticket')

function newTicket(req, res) {
  res.render('tickets/new', { title: 'Add Ticket', ticketId: req.params.id })
}

function create(req, res) {
  flightId = req.params.id
  req.body.flight = flightId
  Ticket.create(req.body, function (err, ticket) {
    res.redirect(`/flights/${flightId}`)
  })
}

module.exports = {
  new: newTicket,
  create,
}
