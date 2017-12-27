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

    get btnRegistration() {
        return browser.element('div.auth-box__switcher-item + div');
    }
    get textBtnRegistration() {
        return this.btnRegistration.getText();
    }

    get txbLogin() {
        return $("input[placeholder='Ник или e-mail']");
    }

    set txbLogin(value) {
        this.txbLogin.setValue(value);
    }

    get txbPassword() {
        return $("input[placeholder='Пароль']");
    }

    set txbPassword(value) {
        this.txbPassword.setValue(value);
    }

    get linkForget() {
        return $(`[href="https://profile.onliner.by/login/lost"]`);
    }

    remind() {
        this.linkForget.click();
    }
}

module.exports = AuthPage;