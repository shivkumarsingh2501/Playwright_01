const { test, expect } = require("@playwright/test");

test.use({
  storageState: 'loginData.json'
});

test("testing global setup", async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/client");

  const products = page.locator('.card-body b');

  await products.first().waitFor();

  const titles = await products.allTextContents();

  for (const title of titles) {
    console.log(title);
  }

  if (titles.includes("iphone 13 pro")) {
    console.log("Contains iphone 13 pro");
  } else {
    console.log("No Phone located");
  }

  expect(titles).toContain("iphone 13 pro");

  const product = page.locator('.card-body').filter({ hasText: 'iphone 13 pro' });

  await product.getByRole('button', { name: 'Add To Cart' }).click();

});