let Page = require('./Page');

class MainPage extends Page {

    constructor() {
        super('Main Page');
    }

    static get mobileCatalog() {
        return browser.element("[href='https://catalog.onliner.by/mobile']");
    }

    open() {
        return super.open("https://www.onliner.by/");
    }

    goToMobilePage() {
        MainPage.mobileCatalog.click();
    }
}

module.exports = MainPage;