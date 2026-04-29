const { test, expect } = require('@playwright/test');
const { generateEmail, checkTitle } = require('../utils/generateEmail');
test.use({
  storageState: { cookies: [], origins: [] }
});
test('User Registration with Mailinator', async ({ page }) => {

    // Use utility function
    const email = generateEmail();

    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    await page.locator("[class='text-reset']").click();

    await page.locator("#firstName").fill("Shiv");
    await page.locator("#lastName").fill("Kumar");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userMobile").fill("9876543210");

    await page.locator("select[formcontrolname='occupation']")
        .selectOption("Engineer");

    await page.locator("input[value='Male']").check();

    await page.locator("#userPassword").fill("Test@123");
    await page.locator("#confirmPassword").fill("Test@123");

    await page.locator("input[type='checkbox']").check();

    await page.locator("input[value='Register']").click();

    await expect(page.locator("text=Account Created Successfully"))
        .toBeVisible();

    console.log("Registered Email:", email);
});