const fs = require('fs');
const path = require('path');
const carlo = require('carlo');
const buildFn = require('./backend/build');
const findVuejsDevtoolsPath = require('./backend/find-vuejs-devtools-path');
const saveFile = require('./backend/saveFile');
const allMethods = require('./modules.template');

(async () => {
  const chromeOptions = [
    `--disable-extensions-except=${findVuejsDevtoolsPath()}`
  ];

  // Launch the browser.
  const app = await carlo.launch({ args: chromeOptions });

  // Terminate Node.js process on app window closing.
  app.on('exit', () => process.exit());

  // Tell carlo where your web files are located.
  app.serveFolder(__dirname);

  await app.exposeFunction('build', buildFn);
  await app.exposeFunction('saveFile', saveFile);
  await app.exposeFunction('getAllMethods', () => allMethods);
  await app.exposeFunction('getSelected', () => {
    const modulePath = path.resolve('./modules.js');

    // clear cache
    delete require.cache[modulePath];

    // eslint-disable-next-line global-require, import/no-unresolved
    return fs.existsSync(modulePath) && require('./modules');
  });

  // Navigate to the main page of your app.
  await app.load('./client/index.html');
})();
