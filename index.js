if (require.main === module.parent) {
  const path = require('path');
  global._rootdir = path.dirname(module.parent.filename) + '/';
  global.reqroot = function (file) {
	return require(_rootdir + file);
  }
} else {
  module.exports = function reqroot(file) {
    return require.main.require('./' + file);
  }
}
