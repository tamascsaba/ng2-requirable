var fs = require('fs');
var sassport = require('sassport');

require('ts-node/register');

require.extensions['.scss'] = function(nodeModule, filename) {
  var result = sassport().renderSync({file: filename});
  nodeModule.exports = result.css.toString();
}

var extensions = ['.html', '.svg'];

for (var i = 0; i < extensions.length; i++) {
  require.extensions[extensions[i]] = function(nodeModule , filename) {
    nodeModule.exports = fs.readFileSync(filename, 'utf8');
  }
}