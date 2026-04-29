const { expect } = require('@playwright/test');

class UserPreferencesPage {
    constructor(page) {
        this.page = page;

        // Radio buttons
        this.radio1 = page.locator("input[value='radio1']");
        this.radio2 = page.locator("input[value='radio2']");
        this.radio3 = page.locator("input[value='radio3']");

        // Checkboxes
        this.checkbox1 = page.locator("#checkBoxOption1");
        this.checkbox2 = page.locator("#checkBoxOption2");
        this.checkbox3 = page.locator("#checkBoxOption3");
    }

    // 🔘 Select radio dynamically
    async selectRadio(option) {
        await this.page.locator(`input[value='${option}']`).check();
    }

    // ✅ Verify radio selected
    async verifyRadioSelected(option) {
        await expect(
            this.page.locator(`input[value='${option}']`)
        ).toBeChecked();
    }

    // ☑️ Check checkbox dynamically
    async checkCheckbox(number) {
        await this.page.locator(`#checkBoxOption${number}`).check();
    }

    // ❌ Uncheck checkbox dynamically
    async uncheckCheckbox(number) {
        await this.page.locator(`#checkBoxOption${number}`).uncheck();
    }

    // ✅ Verify checkbox checked
    async verifyCheckboxChecked(number) {
        await expect(
            this.page.locator(`#checkBoxOption${number}`)
        ).toBeChecked();
    }

    // ✅ Verify checkbox unchecked
    async verifyCheckboxUnchecked(number) {
        await expect(
            this.page.locator(`#checkBoxOption${number}`)
        ).not.toBeChecked();
    }
}

module.exports = { UserPreferencesPage };
