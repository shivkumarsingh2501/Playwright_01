const { test, expect } = require("@playwright/test");

test ("Login test", async ({ page }) => {
  const userName = page.getByRole("textbox", { name: "Username:" });
  const password = page.getByRole("textbox", { name: "Password:" });
  const Login = page.getByRole("button", { name: "Sign In" });

  await page.goto("https://rahulshettyacademy.com/loginpagePractise");
  await userName.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  await Login.click();


  
  await page.context().storageState(
    { 
        path: "loginData.json" 
    });
});
