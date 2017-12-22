let Page = require('../Page');

class ServicesPage extends Page {

    constructor() {
        super('Services Page');
    }

    get title(){
        browser.timeouts('implicit', 1000);
        return browser.getTitle();
    }

}

module.exports = ServicesPage;