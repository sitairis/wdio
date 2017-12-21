let Page = require('../Page');

class FleaMarketPage extends Page {

    constructor() {
        super('Flea Market Page');
    }

    get title(){
        return browser.getTitle();
    }

}

module.exports = FleaMarketPage;