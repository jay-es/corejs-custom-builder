const fs = require('fs');
const path = require('path');

const coreJsBuilder = require('core-js-builder');
const uglifyJs = require('uglify-js');

const DIST_DIR = path.resolve('./dist');

/**
 * @param {Object<string, string>} modules
 */
module.exports = modules => {
  if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR);

  // build
  coreJsBuilder({
    modules: Object.values(modules),
    blacklist: [],
    library: false,
    umd: false
  })
    .then(code => {
      const fileName = path.resolve(DIST_DIR, 'polyfill.min.js');
      const result = uglifyJs.minify(code);

      fs.writeFileSync(fileName, result.code);
    })
    .catch(err => {
      console.error(err);
    });

  // get-methods.js
  {
    const fileName = path.resolve(DIST_DIR, 'get-methods.js');
    const lines = Object.keys(modules)
      .map(key => {
        const val = key
          .split('.')
          .map((v, i, a) => `this.${a.slice(0, i + 1).join('.')}`)
          .join(' && ');
        return `  '${key}': ${val},`;
      })
      .join('\n');
    const content = `function getMethods() {\n return {\n${lines}\n };\n}`;
    fs.writeFileSync(fileName, content);
  }
};
