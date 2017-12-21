let Page = require('../Page');

class ForumPage extends Page {

    constructor() {
        super('Forum Page');
    }

    get title(){
        return browser.getTitle();
    }

}

module.exports = ForumPage;