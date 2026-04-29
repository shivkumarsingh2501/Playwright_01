import { test } from '@playwright/test';
import { UserPreferencesPage } from '../pages/UserPreferencesPage';

test('Validate radio and checkbox functionality', async ({ page }) => {

    const prefPage = new UserPreferencesPage(page);

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    // 🔘 Select radio2
    await prefPage.selectRadio('radio2');
    await prefPage.verifyRadioSelected('radio2');

    // ☑️ Check checkbox2
    await prefPage.checkCheckbox(2);
    await prefPage.verifyCheckboxChecked(2);

    // ❌ Uncheck checkbox2
    await prefPage.uncheckCheckbox(2);
    await prefPage.verifyCheckboxUnchecked(2);
});