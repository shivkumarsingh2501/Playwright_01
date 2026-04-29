import { BrowserUtils } from '../utils/browserUtils';

export class HomePage {
  constructor(page) {
    this.page = page;

    this.userRadio = page.locator("input[value='user']");
    this.termsCheckbox = page.locator("#terms");
    this.documentLink = page.getByRole('link', {
      name: /Free Access to InterviewQues/
    });
    this.usernameInput = page.locator("#username");
  }

  async selectUser() {
    await this.userRadio.check();
  }

  async acceptTerms() {
    await this.termsCheckbox.check();
  }

  async openChildWindow() {
    return await BrowserUtils.openNewPage(
      this.page.context(),
      async () => {
        await this.documentLink.click();
      }
    );
  }

  async fillUsername(value) {
    await this.usernameInput.fill(value);
  }
}
