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

    get authorization(){
        return browser.element(`//div[@id='userbar']/div/div`);
    }

    auth() {
        return this.authorization.click();
    }

    set searchLine(value) {
        browser.setValue("input.fast-search__input", value);
    }

    openSearchForm() {
        this.searchLine = 'Xiaomi';

        browser.timeouts('implicit', 1000);

        let my_frame = $('iframe.modal-iframe').value;
        browser.frame(my_frame);
    }

}

module.exports = MainPage;
