'use strict';

const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session);

const app = express()

let options = {
	store: new RedisStore({
		host: '192.168.0.89',
		port: 6379
	}),
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 60000
	}
}
 
if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  options.cookie.secure = true // serve secure cookies
}
 
app.use(session(options))

// Access the session as req.session
app.get('/', function(req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>views: ' + req.session.views + '</p>')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end()
  } else {
    req.session.views = 1
    res.end('welcome to the session demo. refresh!')
  }
})
 
const host = '0.0.0.0';
const port = 5050;

// Listen
app.listen(port, host, () => {
	const url = 'http://' + host + ':' + port;

	console.log('Starting server on ' + url);
})
