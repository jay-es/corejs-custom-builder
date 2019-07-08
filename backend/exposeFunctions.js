const fs = require('fs');
const path = require('path');
const buildFn = require('./build');
const saveFile = require('./saveFile');
const allMethods = require('../modules.template');

module.exports = async app => {
  await app.exposeFunction('build', buildFn);
  await app.exposeFunction('saveFile', saveFile);
  await app.exposeFunction('getAllMethods', () => allMethods);

  await app.exposeFunction('getSelected', () => {
    const modulePath = path.resolve(__dirname, '../modules.js');

    // clear cache
    delete require.cache[modulePath];

    // eslint-disable-next-line global-require, import/no-unresolved
    return fs.existsSync(modulePath) && require('../modules');
  });
};
