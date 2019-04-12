'use strict'

require('babel-register');

var db = require('../routes/db')

db.init().then(() => {
    process.exit(0)
})
