| Case                                              | Correct Usage              |
| ------------------------------------------------- | -------------------------- |
| Using WDIO runner (`npx wdio run wdio.conf.js`)   | `$('~username')` ✅         |
| Standalone WebDriverIO script (manual `remote()`) | `driver.$('~username')` ✅  |
| Explicit style (optional in WDIO runner)          | `browser.$('~username')` ✅ |
