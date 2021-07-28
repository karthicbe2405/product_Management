var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv').config();

const productRouter = require('./app/routes/product');
let {ErrorHandler} = require('./app/utils/helper');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/products', productRouter);

app.use(ErrorHandler.handleError);

app.listen(process.env.PORT || 3000);

module.exports = app;
