let Page = require('../Page');

class ServicesPage extends Page {

    constructor() {
        super('Services Page');
    }

    get title(){
        return browser.getTitle();
    }

}

module.exports = ServicesPage;