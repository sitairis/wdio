class Page {
    constructor(title) {
        this._title = title;
    }

    open(path) {
        browser.url(path);
    }


    get title() {
        return this._title;
    }
}

module.exports = Page;