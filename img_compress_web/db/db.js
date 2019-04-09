'use strict'

import Sequelize from 'sequelize'
import cfg from '../cfg/config.js'

module.exports =  new Sequelize(cfg.img_db_conf_dev.uri, {
    dialect: 'mysql',
    logging: null
})
