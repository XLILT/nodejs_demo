var qr = require('qr-image'); 

var content = "Usage:\tnode index.js content [png|svg|pdf] [filename]";

if (process.argv.length >= 3) {
    content = process.argv[2];
}

var format = 'png';

if (process.argv.length >= 4) {
    format = process.argv[3];
}

var filename = "qr-img" + Date.now();

if (process.argv.length >= 5) {
    filename = process.argv[4];
}

var qr_data = qr.image(content, { type: format });

qr_data.pipe(require('fs').createWriteStream(filename + "." + format));
