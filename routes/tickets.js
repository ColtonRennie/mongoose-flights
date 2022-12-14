var express = require('express')
var router = express.Router()
var ticketsCtrl = require('../controllers/tickets')

/* GET home page. */

router.get('/flights/:id/tickets/new', ticketsCtrl.new)
router.post('/tickets/:id', ticketsCtrl.create)

module.exports = router
