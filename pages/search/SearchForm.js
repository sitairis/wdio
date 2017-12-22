class searchForm {
    constructor() {
        this._title = 'Search Form';
    }

    get nameItemName() {
        return  browser.element(`div.product__title + a`).isExisting();
    }

    set searchLine(value) {
        browser.timeouts('implicit', 5000);
    }
}

module.exports = searchForm;
