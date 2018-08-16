var express = require('express');
var router = express.Router();

/* GET upload page. */
router.get('/', function(req, res, next) {
  res.render('upload', { title: 'Upload' });
  //res.send("OK");
});

/* POST upload api. */
router.post('/', function(req, res, next) {
  //res.render('upload', { title: 'Upload' });
  console.log(req.body)
  console.log(req.query)
  console.log(req.files)
  res.send("OK");
});

module.exports = router;
