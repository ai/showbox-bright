var shower = require('showbox-shower');
var path   = require('path');
var fs     = require('fs');

module.exports = function (talk) {
    var npm        = path.join(__dirname, 'node_modules');
    var cssFile    = path.join(npm, '/shower-bright/styles/screen.css');
    var syntaxFile = path.join(__dirname, 'syntax.css');

    return shower(cssFile, talk).then(function (data) {
        return new Promise(function (resolve, reject) {
            fs.readFile(syntaxFile, function (err, syntaxCss) {
                if ( err ) return reject(err);
                data.css += syntaxCss;
                resolve(data);
            });
        });
    });
};
