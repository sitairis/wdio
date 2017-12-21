let expect = require('chai').expect;
let MainPage = require('../../pages/MainPage');
let ServicesPage = require('../../pages/navigateMenu/ServicesPage');

describe("Test opening services page", function() {

    it('should get title of services page', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.mainNavigation('Услуги');

        let servicesPage = new ServicesPage();
        let title = servicesPage.title;

        expect(title).to.equal('Onliner. Услуги');
    });
});