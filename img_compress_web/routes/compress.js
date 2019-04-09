'use strict'

var express = require('express');
var router = express.Router();

var rpc = require('../rpc')
var cfg = require('../cfg/config.js')
var db = require('../db')
var sfs = require('../sfs')

async function compress(rid, qua) {
    let docid_dic = {}
    let img_arr

    // 1 get imgs in room
    await db.get_img_in_room(rid).then(res => {
        img_arr = res[0]
    })

    for(var i = 0; i < img_arr.length; i++) {
        // 2 compress it
        let img = img_arr[i]
        let rkey = img.ImgUrl
        let dkey = 'comp_' + qua + "_" + rkey

        // console.log(rkey, dkey)

        await sfs.compress(rkey, dkey, qua).then(() => {
            // 3 update img url
            db.update_img_key(rid, img.DocId, img.PageId, dkey, img.ImgWidth, img.ImgHeight)

            docid_dic[img.DocId] = img.DocId
        }).catch(err => {
            consloe.log(err)
        })
    }

    // 4 notify room to reload
    for(let k in docid_dic) {
        // console.log(docid_dic[k])
        await rpc.reloadRoomDoc(rid, docid_dic[k], cfg.ENV_DEV)
    }
}

router.use('/', function(req, res, next) {
    var rid = req.query.rid
    var qua = req.query.qua

    compress(rid, qua).then(() => {
        res.status(200).send('压缩成功!')
    }).catch(err => {
        res.send('压缩失败!!!')
    })

    
});

module.exports = router;
