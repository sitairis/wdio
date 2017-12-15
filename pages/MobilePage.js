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

    submit() {
        this.chbFirm.click();
    }

    getResultsTitles() {
        let searchResults = [];
        let i = 1;
        try {
            while (browser.element(`//div[@class='schema-product__group'][${i}]//div[@class='schema-product__title']//span`).isExisting()) {
                searchResults.push(`${i} ${browser.element(`//div[@class='schema-product__group'][${i}]//div[@class='schema-product__title']//span`).getText()}`);
                i++;
            }
        } catch (e) {
            console.log(`${e}`);
        }

        return searchResults;
    }
}

module.exports = MobilePage;
// export default new MobilePage();