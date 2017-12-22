class searchForm {

    constructor() {
        this._title = 'Search Form';
    }

    isExistItemName() {
        return  browser.element(`div.product__title + a`).isExisting();
    }

}

module.exports = searchForm;
