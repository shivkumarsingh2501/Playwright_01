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

  if (titles.includes("iphone X")) {
    console.log("Contains Iphone X");
  } else {
    console.log("No Phone located");
  }

  await expect(titles).toContain("iphone 13 pro");

});