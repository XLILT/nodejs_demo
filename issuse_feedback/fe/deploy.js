var copy = require('copy')

copy('fe/webpack_cfg/dist/*', 'public', function(err, files) {
    if (err) {
        console.log(err)
    }
})