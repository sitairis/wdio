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

    get btnAuthorization(){
        return browser.element(`//div[@id='userbar']/div/div`);
    }

    clickBtnAauth() {
        return this.btnAuthorization.click();
    }

    get txbSearch() {
        return $("input.fast-search__input");
    }

    typeSearch(value) {
        this.txbSearch.setValue(value);
    }

    prepareFirstSearch(value) {
        this.typeSearch(value);

        let my_frame = $('iframe.modal-iframe').value;
        browser.frame(my_frame);

        browser.waitForExist(`div.product__title`);
    }

}

module.exports = MainPage;
