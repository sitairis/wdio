let expect = require('chai').expect;
let MainPage = require('../../pages/MainPage');
let SearchForm = require('../../pages/SearchForm');

describe("Test search line", function() {

    it('should get ', function () {
        let mainPage = new MainPage();
        mainPage.open();


        let searchForm = new SearchForm();
        searchForm.openSearchForm().searchLine.value = `Xiaomi`;
// console.log(`${}`)
        // searchForm.searchLine.

        // let result = searchForm.nameItemName();
        //
        // expect(result).to.contain('Xiaomi');

    });
});