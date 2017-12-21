let Page = require('../Page');

class HouseFlatPage extends Page {

    constructor() {
        super('Housea and Flats Page');
    }

    get title(){
        return browser.getTitle();
    }

}

module.exports = HouseFlatPage;