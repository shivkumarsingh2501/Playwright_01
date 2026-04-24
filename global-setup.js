const { chromium } = require('@playwright/test');

async function globalSetup() {

    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://rahulshettyacademy.com/client');

    await page.locator('#userEmail').fill('anshika@gmail.com');
    await page.locator('#userPassword').fill('Iamking@000');

    await page.locator("[value='Login']").click();

    await page.waitForLoadState('networkidle');

    await page.context().storageState({
        path: 'loginData.json'
    });

    await browser.close();

    console.log("✅ loginData.json created");
}

module.exports = globalSetup;