let expect = require('chai').expect;
let MainPage = require('../../pages/MainPage');
let SearchForm = require('../../pages/search/SearchForm');


describe("Test search line", function() {

    it('should find something', function () {
        let mainPage = new MainPage();
        mainPage.open();
        mainPage.openSearchForm();

        let searchForm = new SearchForm();

        let result = searchForm.isExistItemName();

        expect(result).to.equal(true);
    });
});
