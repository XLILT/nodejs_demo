var fs = require('fs')

function saveFeedback(fb) {
    var d = new Date()
    var fname = __dirname + '/logs/feedback_' + (d.getMonth() + 1) + d.getDate() + '.log'

    fs.writeFile(fname, d.toLocaleString() + ' ' + JSON.stringify(fb) + '\n',
        { 'flag': 'a' },
        function(err) {
            if(err) {
                console.log(err)
            }
        }
    )
}

module.exports = {
    saveFeedback
}
