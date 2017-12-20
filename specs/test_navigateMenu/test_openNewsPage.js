let expect = require('chai').expect;
let MainPage = require('../../pages/MainPage');
let NewsPage = require('../../pages/NewsPage');

describe("Test opening news page", function() {

    it('should get title of news page', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.mainNavigation('Новости');

        let newsPage = new NewsPage();
        let title = newsPage.title;

        expect(title).to.equal('Onliner.by');
    });
});