const router = require('express').Router()
const routes = require('./api')

// router.use('/', routes)
router.get('/', function(req, res, next) {
	res.render('index')
});


module.exports = router