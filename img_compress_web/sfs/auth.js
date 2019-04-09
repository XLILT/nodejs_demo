'use strict'

import cfg from '../cfg/config.js'
import axios from 'axios'

module.exports = async () => {
    let token
    await axios.post(cfg.sfs_dev.token_url, {
        accessKey: cfg.sfs_dev.ak,
        secretKey: cfg.sfs_dev.sk,
        timeout: cfg.sfs_dev.tm
    }, {
        headers: {
            "content-type": "application/json",
            "version": "1.0"
        }
    }).then((res) => {
        token = res.data.data.accessToken
    }).catch((err) => {
        console.log(err)
    })

    return token
}
