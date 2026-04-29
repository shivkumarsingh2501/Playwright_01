const { Given, When, Then } = require('@cucumber/cucumber');
const { getPage } = require('../support/hooks');
const { UserPreferencesPage } = require('../pages/UserPreferencesPage');
const { createUser } = require('../utils/apiHelper');


let prefPage;

Given('Create user through API', async () => {
   const response = await createUser();
   console.log(response.body);
});

Given('User opens Rahul Shetty practice page', async () => {
    const page = getPage();
    prefPage = new UserPreferencesPage(page);
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/', {
        waitUntil: 'domcontentloaded'
    });
});

When('User selects {string}', async (radio) => {
    await prefPage.selectRadio(radio);
});

When('User checks checkbox {string}', async (number) => {
    await prefPage.checkCheckbox(number);
});

When('User unchecks checkbox {string}', async (number) => {
    await prefPage.uncheckCheckbox(number);
});

Then('Radio {string} should be selected', async (radio) => {
    await prefPage.verifyRadioSelected(radio);
});

Then('Checkbox {string} should be unchecked', async (number) => {
    await prefPage.verifyCheckboxUnchecked(number);
});
