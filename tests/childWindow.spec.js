import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ChildPage } from '../pages/ChildPage';

test('Rahul Shetty Login Flow', async ({ page }) => {
  const home = new HomePage(page);

  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

  
  const childPage = await home.openChildWindow();
  const child = new ChildPage(childPage);

  const text = await child.getText();
  console.log(text);
  const domain = await child.extractDomain()
  console.log(domain)
});