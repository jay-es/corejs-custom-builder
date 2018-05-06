const fs = require('fs');
const path = require('path');
const modules = require('./modules');

const DIST_DIR = './dist';
fs.existsSync(DIST_DIR) || fs.mkdirSync(DIST_DIR);

// entry.js
const entryFile = path.resolve(DIST_DIR, 'entry.js');
const entryContent = Object.values(modules)
  .map(val => `require('core-js/modules/${val}');`).join('\n');
fs.writeFileSync(entryFile, entryContent);

// get-methods.js
const testFile = path.resolve(DIST_DIR, 'get-methods.js');
const lines = Object.keys(modules)
  .map((key) => {
    const val = key.split('.')
      .map((v, i, a) => 'this.' + a.slice(0, i + 1).join('.'))
      .join(' && ');
    return `  '${key}': ${val},`;
  })
  .join('\n');
const testContent = `function getMethods() {\n return {\n${lines}\n };\n}`;
fs.writeFileSync(testFile, testContent);
