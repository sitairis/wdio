let expect = require('chai').expect;
let MainPage = require('../../pages/MainPage');
let CatalogPage = require('../../pages/CatalogPage');

describe("Test opening catalog page", function() {

    it('should get title of catalog page', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.mainNavigation('Каталог');

        let catalogPage = new CatalogPage();
        let title = catalogPage.title;

        expect(title).to.equal('Каталог Onliner.by');
    });
});