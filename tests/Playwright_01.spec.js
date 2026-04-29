const { test, expect } = require('@playwright/test');

test('testing global setup', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/client');

  const firstProduct = page.locator('.card-body h5').first();

  await expect(firstProduct).toBeVisible();

  console.log(await firstProduct.textContent());
});