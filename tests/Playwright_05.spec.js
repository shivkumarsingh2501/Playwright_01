const { test, expect } = require('@playwright/test');
test.use({
  storageState: { cookies: [], origins: [] }
});
test('@Web Client App login', async ({ page }) => {

   const email = "anshika@gmail.com";

   await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();

   // ✅ best wait (UI based)
   const products = page.locator(".card-body b");
   await products.first().waitFor();

   const titles = await products.allTextContents();
   console.log(titles);

});