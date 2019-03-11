const path = require('path');

const rootDir = (() => {
  const mainFilename = require.main.filename;
  if (mainFilename.includes('/node_modules/')) {
    const cwd = process.env.INIT_CWD;
    if (cwd) {
      return process.env.INIT_CWD + '/';
    } else {
      return mainFilename.replace(/\/node_modules.+$/, '/')
    }
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
