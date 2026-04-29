const { test, expect } = require("@playwright/test");

test.use({
  storageState: "loginData.json",
});

test("testing global setup", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");
  await page.waitForLoadState("networkidle");

  const products = page.locator(".card-body");
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    const product = products.nth(i);

    const productName = await product.locator("b").textContent();

    if (productName.includes("iphone 13 pro")) {
      await product.getByRole("button", { name: "Add To Cart" }).click();
      break;
    }
  }
});