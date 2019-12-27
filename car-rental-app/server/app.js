var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cars = require('./routes/cars');
var reserve = require('./routes/reserve');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/cars', cars);
app.use('/api/reserve', reserve);

module.exports = app;
