var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query.file);
  
  res.render('play', {
  	file: req.query.file
  });
});

module.exports = router;
