export class ChildPage {
    constructor(page) {
        this.page = page;
        this.textLocator = page.locator('.red');
    }

    // 🔥 Get full text
    async getText() {
        return await this.textLocator.textContent();
    }

    // 🔥 Extract domain (from your notes logic)
    async extractDomain() {
        const text = await this.getText();

        const domain = text
            .split('@')[1]   // right part
            .split(' ')[0]; // first word

        return domain;
    }
}