const carlo = require('carlo');
const findExtPath = require('./backend/find-chrome-extension-path');
const exposeFunctions = require('./backend/exposeFunctions');

(async () => {
  const vueDevtoolsPath = findExtPath('nhdogjmejiglipccpnnnanhbledajbpd');
  const chromeOptions = [
    `--window-size=1024,820`,
    `--disable-extensions-except=${vueDevtoolsPath}`
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
