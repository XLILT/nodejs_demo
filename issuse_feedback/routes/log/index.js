var fs = require('fs')

function time_str(date) {
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' '
        + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}

function saveFeedback(fb) {
    var d = new Date()
    var fname = __dirname + '/logs/feedback_' + (d.getMonth() + 1) + d.getDate() + '.log'

    fs.writeFile(fname, time_str(d) + ' ' + JSON.stringify(fb) + '\n',
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
