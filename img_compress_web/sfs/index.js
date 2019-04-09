'use strict'

import get_token from './auth'
import cfg from '../cfg/config.js'
import axios from 'axios'

let token = null

get_token().then(t => {
    token = t
})

async function sfs_compress(rkey, dkey, qua) {    
    let ret = false
    await axios({
        method: 'POST',
        url: cfg.sfs_dev.compress_url,
        data: {
            key: rkey,
            destKey: dkey,
            quality: qua
        },
        headers: {
            "authorization": token,
            "content-type": "application/json",
            "version": "1.0"
        }
    }).then(res => {
        // console.log(res)

        if(res.data.code === '200') {
            ret = true
        }
    }).catch(err => {
        console.log('sfs_compress err')
    })

    return ret
}

module.exports = {
    compress(key, dkey, qua) {
        if(token === null) {
            get_token().then(t => {
                token = t

                return sfs_compress(key, dkey, qua)
            })
        }
        else {
            return sfs_compress(key, dkey, qua)
        }
    }
}