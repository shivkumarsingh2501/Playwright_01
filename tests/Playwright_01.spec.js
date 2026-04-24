const { test, expect } = require("@playwright/test");

test("Login Error Validation", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");

  await page.locator("#username").fill("wrongUser");
  await page.locator('[type="password"]').fill("wrongPass");

  await page.locator("#signInBtn").click();

  const errorText = await page.locator('[style*="block"]').textContent();

  console.log(errorText);
});

test("Simple Test", async ({ browser  }) => {
  const context = await browser.newContext({
        storageState: 'loginData.json'
    })
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    await page
    .locator(".card")
    .filter({ hasText: "iphone X" })
    .getByRole("button", { name: "Add" })
    .click();

  
});
test("Simple Test 2", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  await page.locator("#username").fill("rahulshettyacademy");
  await page.locator('[type="password"]').fill("Learning@830$3mK2");
  await page.getByRole("button", { name: "Sign In" }).click();
  // await page.getByText('Sign').click();
});
test("Advance Locator Testing", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  await page
    .getByRole("textbox", { name: "Username:" })
    .fill("rahulshettyacademy");
  await page
    .getByRole("textbox", { name: "Password:" })
    .fill("Learning@830$3mK2");
  await page.getByRole("button", { name: "Sign In" }).click();
  // await page.getByText('Sign').click();
  // await page.locator('.card')
  //   .filter({ hasText: 'iphone X' })
  //   .click();

  await page
    .locator(".card")
    .filter({ hasText: "iphone X" })
    .getByRole("button", { name: "Add" })
    .click();

  //
  // await page.locator('.card')
  //     .locator('button')
  //     .click();
});
test("Reusing locators", async ({ page }) => {
  const userName = page.getByRole("textbox", { name: "Username:" });
  const password = page.getByRole("textbox", { name: "Password:" });
  const Login = page.getByRole("button", { name: "Sign In" });

  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  await userName.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  await Login.click();
  const firstProduct = await page.locator(".card-body a").first().textContent();
  console.log(firstProduct); // iPhone X
  await page
    .locator(".card")
    .filter({ hasText: "iphone X" })
    .getByRole("button", { name: "Add" })
    .click();
});
test.only("testing globla setput", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client");

  const text = await page.locator(".card-body").first().textContent();
  console.log(text);
  const firstProduct = await page.locator(".card-body a").first().textContent();
  console.log(firstProduct); // iPhone X
  await page
    .locator(".card")
    .filter({ hasText: "iphone X" })
    .getByRole("button", { name: "Add" })
    .click();
});
