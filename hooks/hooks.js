const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Before(async function () {
    browser = await chromium.launch();
    const context = await browser.newContext();
    page = await context.newPage();
    global.page = page;
});

After(async function (scenario) {

    if (scenario.result.status === 'FAILED') {
        await page.screenshot({
            path: `screenshots/${scenario.pickle.name}.png`,
            fullPage: true
        });
    }

    await browser.close();
});