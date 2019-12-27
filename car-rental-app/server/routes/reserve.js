var express = require('express');
var _ = require('lodash');
var router = express.Router();
var bookings = require('../data/bookings.json')

router.get('', function(req, res, next) {
    return res.json({bookings: bookings});
});

router.post('', function(req, res, next) {
    return res.json();
});

module.exports = router;