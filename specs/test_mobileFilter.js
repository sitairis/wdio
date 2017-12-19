let expect = require('chai').expect;
let MainPage = require('../pages/MainPage');
let MobilePage = require('../pages/MobilePage');

describe("Test mobile filter", function() {

    it('should get list titles of phones', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.goToMobilePage();

        let mobilePage = new MobilePage();
        mobilePage.open();
        mobilePage.checkFirm();
        mobilePage.txbPriceTo.setValue('350');

        browser.timeouts('implicit', 1000);

        let result = mobilePage.getResultsTitles();

        result.forEach((currentElement) => {
            expect(currentElement).to.contain('Xiaomi');
        });
    });
});