'use strict';

const path = require('path');
const cfg = require('../cfg/config');
const Communicator = require("@tars/rpc").Communicator;
const Document = require("./DocumentProxy").sunlive;
const Room = require('./RoomProxy').sunlive;
const ServerTrans = require('./ServerTransTars.js').sunlive;

module.exports = {
    downloadRoomDoc(rid, env = cfg.ENV_DEV) {
        const req = new Document.DownloadRequest();
        req.lRoomId = rid;
        req.bReturnAll = true;

        var c = Communicator.New();

        if(env === cfg.ENV_TEST) {            
            c.initialize(path.join(__dirname, "./config_test.conf"));
        }else if(env === cfg.ENV_PROD) {            
            c.initialize(path.join(__dirname, "./config_prod.conf"));
        }else {
            c.initialize(path.join(__dirname, "./config_dev.conf"));
        }

        const prx = c.stringToProxy(Document.DocumentProxy, "SunLive.DocumentServer.DocumentObj");

        var res = prx.download(req);

        c.destroy();

        return res;
    },
    reloadRoomDoc(rid, docid, env=cfg.ENV_DEV) {
        const req = new ServerTrans.ServerMsg();
        req.eBroadcastType = ServerTrans.BroadCastType.BT_ROOM;
        req.iRoomId = rid;
        req.eType = ServerTrans.ServerMsgType.SRMT_UPLOAD_NOTIFY;
        
        const notify = new ServerTrans.UploadNotify();
        notify.iDocId = docid;

        req.bytes = notify.toBinBuffer();
        
        var c = Communicator.New();

        if(env === cfg.ENV_TEST) {            
            c.initialize(path.join(__dirname, "./config_test.conf"));
        }else if(env === cfg.ENV_PROD) {            
            c.initialize(path.join(__dirname, "./config_prod.conf"));
        }else {
            c.initialize(path.join(__dirname, "./config_dev.conf"));
        }

        const prx = c.stringToProxy(Room.RoomProxy, "SunLive.RoomServer.RoomObj");

        var res = prx.server2Room(req);

        c.destroy();

        return res;        
    }
}
