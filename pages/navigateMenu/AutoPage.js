let Page = require('../Page');

class AutoPage extends Page {

    constructor() {
        super('Auto Page');
    }

    get title(){
        return browser.getTitle();
    }

}

module.exports = AutoPage;