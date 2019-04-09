'use strict';

import sequelize from './db'
import Img from './img'
import RoomImg from './roomimg'

module.exports = {    
    get_img_in_room(rid) {
        return sequelize.query("SELECT ImgUrl, DocId, PageId, ImgWidth, ImgHeight FROM img i, roomimg ri \
 WHERE ri.PrimaryKey=i.Id AND IsThumbnail=2 AND ImgSize!=0 AND RoomId=" + rid)
    },
    update_img_key(rid, docid, pageid, key, w, h) {
        // console.log(rid, docid, pageid, key)

        sequelize.transaction(t => {
            return Img.create({
                ImgUrl: key,
                ImgHash: key,
                ImgWidth: w,
                ImgHeight: h,
                Source: 1
            }, {transaction: t}).then(img => {
                // console.log(img.dataValues.Id)

                return RoomImg.update({
                    PrimaryKey: img.dataValues.Id
                }, {
                    'where': {
                        RoomId: rid,
                        DocId: docid,
                        PageId: pageid,
                        IsThumbnail: 2
                    }
                })
            }, {transaction: t}).then((res) => {
                // console.log(res)
            }).catch((err) => {
                console.log('update_img_key err')
            })
        })
        
    }
}