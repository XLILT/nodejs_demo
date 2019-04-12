var express = require('express')
var router = express.Router()

var db = require('./db')

router.get('/', function(req, res, next) {
    db.getAllCourses().then(result => {
        res.send(result);
    }).catch(err => {
        console.log(err)

        res.sendStatus(500)
    })
});

module.exports = router;
