let expect = require('chai').expect;
let MainPage = require('../../pages/MainPage');
let SearchForm = require('../../pages/search/SearchForm');
let AuthPage = require('../../pages/userBar/AuthPage');
let driver = require('webdriverio');

describe("Test search line", function() {

    it('should get ', function () {
        let mainPage = new MainPage();
        mainPage.open();


        let searchForm = new SearchForm();

        searchForm.openSearchForm();
        searchForm.searchLine = 'Xiaomi';
        // browser.timeouts('implicit', 10000);

        let result = searchForm.nameItemName();

        expect(result).to.contain('true');

    });

    // it('should get ', function () {
    //     let mainPage = new MainPage();
    //     mainPage.open();
    //     mainPage.auth();
    //
    //     let authPage = new AuthPage();
    //
    //     // expect(result).to.contain('Регистрация');
    //
    // });
});
