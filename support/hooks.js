const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser;
let page;

setDefaultTimeout(30 * 1000);

Before(async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
});

After(async function () {
  if (browser) {
    await browser.close();
  }
});

function getPage() {
  return page;
}

module.exports = { getPage };
