var express = require('express');
var _ = require('lodash');
var router = express.Router();
var cars = require('../data/cars.json')

router.get('/:type?', function(req, res, next) {
  var filterType = req.params.type;
  if (!filterType || filterType === 'all') {
    return res.json( {cars : cars });
  } else {
    var filteredCars = _.filter(cars, ['classification', filterType ])
    return res.json({cars: filteredCars});
  }  
});

module.exports = router;
