let expect = require('chai').expect;
let MainPage = require('../../pages/MainPage');
let ForumPage = require('../../pages/navigateMenu/ForumPage');

describe("Test opening forum page", function() {

    it('should get title of forum page', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.mainNavigation('Форум');

        let fleaMarketPage = new ForumPage();
        let title = fleaMarketPage.title;

        expect(title).to.equal('Форум onliner.by - Главная страница');
    });
});