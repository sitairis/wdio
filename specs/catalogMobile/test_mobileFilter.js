let expect = require('chai').expect;
let MainPage = require('../../pages/MainPage');
let MobilePage = require('../../pages/MobilePage');
let FilterPanel = require(`../../pages/filters/FilterPanel`);

describe("Test mobile filter", function() {

    it('should get list titles of phones', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.goToMobilePage();

        let mobilePage = new MobilePage();

        let filter = new FilterPanel();
        filter.setCheckboxFilter(`Производитель`, `Xiaomi`, `Apple`);
        // mobilePage.checkFirm();
        // mobilePage.txbPriceTo.setValue('350');

        browser.timeouts('implicit', 1000);

        let result = mobilePage.getResultsTitles();

        result.forEach((currentElement) => {
            expect(result).to.contain(`Xiaomi`);
        });
    });
});
