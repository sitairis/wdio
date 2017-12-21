class searchForm {
    constructor() {
        this._title = 'Search Form';
        this.root = browser.element(`.modal-iframe`);
    }

    get nameItemName() {
        return  this.root.element(`.result__item result__item_product`).isExisting();
    }

    set searchLine(value) {
        browser.element(`.search__input`).value = value;
    }

    openSearchForm() {
        browser.element(`.fast-search__input`).click();
        // browser.timeouts('implicit', 5000);
        let handles = browser.windowHandles();

        return browser.switchTab(0);
        // return browser.frame(browser.getElementsByTagName('iframe'));
       //  return browser.waitForExist('iframe.modal-iframe', 20000)
       //      .frame('modal-iframe');
    }
}

module.exports = searchForm;