let Page = require('./Page');

class MainPage extends Page {

    constructor() {
        super('Main Page');
    }

    get mobileCatalog() {
        return browser.element("[href='https://catalog.onliner.by/mobile']");
    }

    mainNavigation(name) {
        browser.element(`//ul[@class = 'b-main-navigation']//span[.='${name}']`).click();
    }

    open() {
        super.open("https://www.onliner.by/");
    }

    goToMobilePage() {
        this.mobileCatalog.click();
    }

    auth() {
        return browser.element(`//div[@id='userbar']/div/div`).click();
    }


    openSearchForm() {
        browser.setValue("input.fast-search__input", 'Xiaomi');
        browser.timeouts('implicit', 1000);
        // browser.waitForExist('iframe.modal-iframe');
        let my_frame = $('iframe.modal-iframe').value;
        browser.frame(my_frame);
    }

}

module.exports = MainPage;
