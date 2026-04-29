const { test, expect } = require("@playwright/test");

test.use({
  storageState: "loginData.json",
});

test("testing global setup", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.waitForLoadState("networkidle");
  const products = page.locator(".card-body b");

  // wait until UI is ready
  await products.first().waitFor();

  // now safely get all titles
  const titles = await products.allTextContents();

  console.log(titles);
});
