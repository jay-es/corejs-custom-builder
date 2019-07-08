const carlo = require('carlo');
const findVuejsDevtoolsPath = require('./backend/find-vuejs-devtools-path');
const exposeFunctions = require('./backend/exposeFunctions');

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

  await exposeFunctions(app);

  // Navigate to the main page of your app.
  await app.load('./client/index.html');
})();
