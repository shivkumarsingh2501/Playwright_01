const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 40000,

  expect: {
    timeout: 40000
  },

  globalSetup: './global-setup.js',

  use: {
    storageState: 'loginData.json',
    headless: false
  },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' }
    }
  ],

  reporter: 'html'
});