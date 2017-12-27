let Page = require('../Page');

class ServicesPage extends Page {

    constructor() {
        super('Services Page');
    }

    get title(){
        browser.waitForExist(`[href='https://people.onliner.by/2017/03/22/kak-nachat-biznes-v-rb']`);
        return browser.getTitle();
    }

}

module.exports = ServicesPage;