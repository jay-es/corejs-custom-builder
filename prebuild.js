const fs = require('fs');
const path = require('path');
const modules = require('./modules');


const entryFile = path.resolve('./dist/entry.js');
const entryContent = Object.keys(modules)
  .map(key => `require('${key}')`)
  .join('\n');

fs.writeFileSync(entryFile, entryContent);


const testFile = path.resolve('./dist/get-methods.js');
let testContent = 'function getMethods() {\n return {\n';
Object.entries(modules)
  .forEach(([key, val]) => {
    testContent += `  '${key}': ${val},\n`;
  });
testContent += ' };\n}\n';

fs.writeFileSync(testFile, testContent);

