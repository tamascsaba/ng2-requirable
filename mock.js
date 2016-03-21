var fs = require('fs');
var extensions = ['.html', '.svg', '.sass', '.scss', '.css'];
var readable = ['html', 'svg'];

function isReadable(ext) {
    return readable.indexOf(ext) >= 0;
}

for (var i = 0; i < extensions.length; i++) {
  require.extensions[extensions[i]] = function(nodeModule, filename) {
    var ext = filename.split('.').pop();
    nodeModule.exports = isReadable(ext) ? fs.readFileSync(filename, 'utf8') : '';
  }
}