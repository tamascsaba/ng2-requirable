var extensions = ['.html', '.svg', '.sass', '.scss', '.css'];

for (var i = 0; i < extensions.length; i++) {
  require.extensions[extensions[i]] = function(nodeModule) {
    nodeModule.exports = '';
  }
}