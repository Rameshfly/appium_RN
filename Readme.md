| Case                                              | Correct Usage              |
| ------------------------------------------------- | -------------------------- |
| Using WDIO runner (`npx wdio run wdio.conf.js`)   | `$('~username')` ✅         |
| Standalone WebDriverIO script (manual `remote()`) | `driver.$('~username')` ✅  |
| Explicit style (optional in WDIO runner)          | `browser.$('~username')` ✅ |

Before running you have to start appium server in another terminal: `appium`

Standalone Run: `node test.js`
WDIO Config Run: `npx wdio run ./wdio.conf.js`