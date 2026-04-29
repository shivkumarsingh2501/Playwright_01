const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

let browser, page;

Given("User launches website", async function () {
  browser = await chromium.launch();
  page = await browser.newPage();
  await page.goto("https://example.com");
});

When("User enters username {string}", async function (username) {
  await page.fill("#user", username);
});

When("User enters password {string}", async function (password) {
  await page.fill("#pass", password);
});

When("User clicks login", async function () {
  await page.click("#login");
});

Then("User should see dashboard", async function () {
  await page.waitForSelector(".dashboard");
  await browser.close();
});

Given(
  "Login to ecommerce application with {string} and {string}",

  async function (username, password) {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();

    await page.goto("https://site.com");
    await page.fill("#user", username);
    await page.fill("#pass", password);
    await page.click("#login");
  },
);
