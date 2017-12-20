let Page = require('./Page');

class MainPage extends Page {

    constructor() {
        super('Main Page');
    }

     get mobileCatalog() {
        return browser.element("[href='https://catalog.onliner.by/mobile']");
    }

    mainNavigation(name){
        return browser.element(`//ul[@class = 'b-main-navigation']//span[.='${name}']`).click();
    }

    open() {
        return super.open("https://www.onliner.by/");
    }

    goToMobilePage() {
        this.mobileCatalog.click();
    }

}

module.exports = MainPage;