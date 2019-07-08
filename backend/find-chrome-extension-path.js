const fs = require('fs');
const path = require('path');

/**
 * @param {string} extensionId
 * @returns {string} Extension Path
 */
module.exports = extensionId => {
  const { LOCALAPPDATA, HOME } = process.env;
  const paths = ['Default/Extensions', extensionId];

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
