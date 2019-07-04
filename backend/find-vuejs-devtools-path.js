const fs = require('fs');
const path = require('path');

/** @returns {string} Vue.js devtools Path */
module.exports = () => {
  const { LOCALAPPDATA, HOME } = process.env;
  const paths = ['Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd'];

  if (LOCALAPPDATA) {
    // Win
    paths.unshift(LOCALAPPDATA, 'Google/Chrome/User Data');
  } else if (HOME) {
    // Mac
    paths.unshift(HOME, 'Library/Application Support/Google/Chrome');
  }

  const basePath = path.resolve(...paths);

  if (!fs.existsSync(basePath)) return '';

  // First subdirectory
  const dirName = fs
    .readdirSync(basePath)
    .map(v => path.resolve(basePath, v))
    .find(v => fs.statSync(v).isDirectory());

  return dirName ? path.resolve(basePath, dirName) : '';
};
