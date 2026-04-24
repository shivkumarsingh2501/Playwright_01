const { test, expect } = require('@playwright/test');
const { getToken } = require('../utils/apiLogin');

test('API Login Test', async ({ browser }) => {

   const token = await getToken();

   const context = await browser.newContext();

   await context.addInitScript(value => {
      window.localStorage.setItem('token', value);
   }, token);

   const page = await context.newPage();

   await page.goto('https://rahulshettyacademy.com/client');

   
   await page.context().storageState(
    { 
        path: "authorization.json" 
    });

});