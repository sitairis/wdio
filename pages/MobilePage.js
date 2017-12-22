let Page = require('./Page');

class MobilePage extends Page {

    constructor() {
        super("Mobile Page");
    }

    get chbFirm() {
         return browser.element(`//div[2][@class='schema-filter__facet']//ul[@class='schema-filter__list']//span[.='Xiaomi']/../span[@class='i-checkbox']/span`);
   //кошмар исправить!!!!!!!!
    }

    get txbPriceTo() {
        return browser.element("//input[@placeholder = 'до']");
    }

    get title() {
        return browser.getTitle();
    }

    checkFirm() {
        this.chbFirm.click();
    }

    getResultsTitles() {
        let searchResults = [];
        let index = 1;
        let element = browser.element(`//div[@class='schema-product__group'][1]//div[@class='schema-product__title']//span`);
        try {
            while (element.isExisting()) {
                element = browser.element(`//div[@class='schema-product__group'][${index}]//div[@class='schema-product__title']//span`).waitForVisible(1000);
                searchResults.push(`${element.getText()}`);
                index++;
            }
        } catch (e) {
            console.log(`${e}`);
        }

        return searchResults;
    }

}

module.exports = MobilePage;