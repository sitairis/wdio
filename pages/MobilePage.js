let Page = require('./Page');

class MobilePage extends Page {

    constructor() {
        super(MobilePage);
    }

    get chbFirm() {
        return browser.element("//input[@value='xiaomi']/following-sibling::span");
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
        try {
            while (browser.element(`//div[@class='schema-product__group'][${index}]//div[@class='schema-product__title']//span`).isExisting()) {
                searchResults.push(`${index} ${browser.element(`//div[@class='schema-product__group'][${index}]//div[@class='schema-product__title']//span`).getText()}`);
                index++;
            }
        } catch (e) {
            console.log(`${e}`);
        }

        return searchResults;
    }
}

module.exports = MobilePage;