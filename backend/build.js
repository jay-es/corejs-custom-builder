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

  // generate 'polyfill.min.js'
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

  // generate 'methodNames.js'
  {
    const fileName = path.resolve(DIST_DIR, 'methodNames.js');
    const lines = Object.keys(modules)
      .map(v => `  '${v}'`)
      .join(',\n');
    const content = `var methodNames = [\n${lines}\n];`;
    fs.writeFileSync(fileName, content);
  }
};
