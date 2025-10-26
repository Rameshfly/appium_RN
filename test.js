const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android',
  // 'appium:appPackage': 'com.exponotifie',
  // 'appium:appActivity': '.MainActivity',
  'appium:app': './app/expoNotifee.apk',
};

const wdOpts = {
  hostname: process.env.APPIUM_HOST || 'localhost',
  port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
  logLevel: 'info',
  capabilities,
};

// (async () => {
//   const driver = await remote(wdOpts);
//   await driver.pause(4000); // give app time to render

//   const pageSource = await driver.getPageSource();
//   console.log("<<pageSource: ", pageSource); // 🔍 inspect XML in console

//   await driver.deleteSession();
// })();

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    // await driver.pause(3000);

    // Find username field by resource-id (as defined in your page source)
    const usernameField = driver.$('~username');
    // await usernameField.waitForDisplayed({ timeout: 5000 });
    const passwordField = driver.$('~password');
    const loginButton = driver.$('~loginButton');

    await usernameField.setValue('testUser');
    await passwordField.setValue('password123');
    await loginButton.click();

    const welcomeMessage = driver.$('~welcomeMessage');
    console.log('Login success?', await welcomeMessage.isDisplayed());
    console.log('✅ User Logged In successfully');
  } finally {
    await driver.pause(3000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);