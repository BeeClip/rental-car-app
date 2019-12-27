var express = require('express');
var _ = require('lodash');
var router = express.Router();
var bookings = require('../data/bookings.json')
var fs = require('fs');

router.get('', function(req, res, next) {
    return res.json({bookings: bookings});
});

router.post('', function(req, res, next) {
    let booking = req.body.booking;
    bookings.push(booking);
    return res.json({message: 'Your car was reserved successfully!'});
});

module.exports = router;