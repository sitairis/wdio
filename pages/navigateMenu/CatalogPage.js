let Page = require('../Page');

class CatalogPage extends Page {

    constructor() {
        super('Catalog Page');
    }

    get title(){
        return browser.getTitle();
    }

}

module.exports = CatalogPage;