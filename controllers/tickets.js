const Ticket = require('../models/ticket')

function newTicket(req, res) {
  res.render('tickets/new', { title: 'Add Ticket', ticketID: req.params.id })
}
module.exports = {
  new: newTicket,
}
