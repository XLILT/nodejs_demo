'use strict';

const express    = require('express')
const serveIndex = require('serve-index')
 
const app = express()
 
// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/', express.static('public'), serveIndex('public', {
	'icons': true,
	'hidden': true,	
	'view': 'details'
}))
 
// Listen
app.listen(3000)
