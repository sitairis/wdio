let Page = require('../Page');

class AuthPage extends Page {

    constructor() {
        super('Auth Page');
    }

    openAuthPage() {
        browser.timeouts('implicit', 3000);

        let curTabId = browser.getCurrentTabId();
        browser.switchTab(curTabId);
    }

    get registBtn() {
        return browser.element('div.auth-box__switcher-item + div');
    }
    get textRegistrButton() {
        return this.registBtn.getText();
    }
}

module.exports = AuthPage;