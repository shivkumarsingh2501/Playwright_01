export class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.userRadio = page.locator("input[value='user']");
    this.adminRadio = page.locator("input[value='admin']");
    this.checkbox = page.locator("#terms");
    this.signInBtn = page.locator("#signInBtn");
    this.blinkingLink = page.locator(".blinkingText");
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.signInBtn.click();
  }
  

  async selectUser() {
    await this.userRadio.check();
  }

  async acceptTerms() {
    await this.checkbox.check();
  }

  async openChildWindow() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.blinkingLink.click()
    ]);
    return newPage;
  }
}