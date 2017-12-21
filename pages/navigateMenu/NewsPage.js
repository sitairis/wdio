let Page = require('../Page');

class NewsPage extends Page {

    constructor() {
        super('News Page');
    }

    get title(){
        return browser.getTitle();
    }

}

module.exports = NewsPage;