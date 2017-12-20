class searchForm {
    constructor() {
        this._title = 'Search Form';
    }

    get nameItemName() {
        return browser.element(`//div[@class='product__title']/a`).getText();
    }

    get searchLine() {
        return browser.element(`//input[@class='search__input']`);
    }

    openSearchForm() {
        browser.element(`//input[@class='fast-search__input']`).click();
        return browser.frame(0);

    }
}

module.exports = searchForm;