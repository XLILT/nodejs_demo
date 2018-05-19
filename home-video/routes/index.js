var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

String.prototype.endWith = function(endStr) {
	var d = this.length-endStr.length;
	return (d >= 0 && this.lastIndexOf(endStr) == d);
};

/* GET home page. */
router.get('/', function(req, res, next) {
	var files_list = [];

	fs.readdirSync(path.resolve(__dirname, '../public/video')).forEach(function(file) {
		if(file.endWith('.mp4') || file.endWith('.mkv') || file.endWith('.rmvb')) {
			files_list.push(file);
		}
	});

	res.render(
		'index',
		{
			title: '家庭电影院',
			files: files_list
		}
	);
});

module.exports = router;