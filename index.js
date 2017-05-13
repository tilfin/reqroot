const path = require('path');
const rootDir = path.resolve('.') + '/';

if (require.main === module.parent) {
  global._rootdir = rootDir;
  global.reqroot = function (file) {
	return require(_rootdir + file);
  }
}

module.exports = function reqroot(file) {
  return require(rootDir + file);
}
