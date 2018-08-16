'use strict';

const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 6060 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log(message);

    //ws.send(new Buffer(3));
    //ws.send(new Uint8Array(10));
    ws.send([1, 2, 3]);
  });
 
  //ws.send('something');
  //ws.send([1, 2, 3]);
});
