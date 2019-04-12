'use strict'

import db from './models'

function init() {    
    return db.course.sync()
}

function getAllCourses() {
    return db.course.findAll()
}

module.exports = {
    init,
    getAllCourses
}
