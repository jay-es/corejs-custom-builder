const fs = require('fs');

/**
 * @param {Object<string, string>} targets
 * @returns {void}
 */
module.exports = targets => {
  const lines = Object.entries(targets)
    .map(([k, v]) => `  '${k}': '${v}'`)
    .join(',\n');
  const content = `module.exports = {\n${lines}\n};\n`;
  fs.writeFileSync('modules.js', content);
};
