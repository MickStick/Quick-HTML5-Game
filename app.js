require('dotenv').config()

const express = require('express')
const path = require('path')
const cors = require('cors')
var createError = require('http-errors')
const bodyParser = require('body-parser')
var Router = require('./router/router')
var logger = require('morgan')

const app = express()

///////////////////////////////////////////////////////////////
/**
 * Set Server middleware
 */
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
app.use(Router)
///////////////////////////////////////////////////////////////

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.send(err)
});

module.exports = app;