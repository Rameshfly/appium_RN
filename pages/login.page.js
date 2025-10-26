// const { DriverCore } = require("appium/driver");

class LoginPage {
    get usernameField() { return $('~username'); }
    get passwordField() { return $('~password'); }
    get loginButton() { return $('~loginButton'); }
    get welcomeMessage() { return $('~welcomeMessage'); }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);

        await driver.pause(3000);
        await this.loginButton.click();
    }

    // async getWelcomeText() {
    //     return await this.welcomeMessage.getText();
    // }
}

module.exports = new LoginPage();