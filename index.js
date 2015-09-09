var shower = require('showbox-shower');
var path   = require('path');

module.exports = function (talk) {
    var npm     = path.join(__dirname, 'node_modules');
    var cssFile = path.join(npm, '/shower-bright/styles/screen.css');
    return shower(cssFile, talk);
};
