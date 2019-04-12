var express = require('express')
var router = express.Router()
var log = require('./log')

router.post('/', function(req, res, next) {
    res.sendStatus(200)
    log.saveFeedback(req.body)
});

module.exports = router;
