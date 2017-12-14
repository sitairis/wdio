describe("First Spec", function() {

    it("should open mobile catalog", function () {
        browser.url("https://www.onliner.by/");
        browser.timeouts('implicit', 5000);
        let mobile = browser.element("[href='https://catalog.onliner.by/mobile']");
        mobile.click();
            browser.click("//input[@value='xiaomi']/following-sibling::span");
        // browser.element("//input[@name = 'btnK']").click();

        console.log(`${browser.getTitle()}`);

    });
});
