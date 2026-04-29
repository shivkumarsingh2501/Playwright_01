export class BrowserUtils {

    static async openNewPage(context, action) {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            action() // click or any trigger
        ]);

        await newPage.waitForLoadState();
        return newPage;
    }
}