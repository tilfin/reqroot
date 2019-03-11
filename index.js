const path = require('path');

const rootDir = (() => {
  const mainFilename = require.main.filename;
  if (mainFilename.includes('/node_modules/')) {
    return process.env.INIT_CWD + '/';
  } else {
    return path.dirname(mainFilename) + '/';
  }
})();

global._rootdir = rootDir;
global.reqroot = function (file) {
  return require(_rootdir + file);
}

module.exports = function reqroot(file) {
  return require(rootDir + file);
}
