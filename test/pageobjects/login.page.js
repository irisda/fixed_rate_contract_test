
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage  {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('input[name="email"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    get btnSubmit () {
        return $('[data-qa="log-in"]');
    }

    get noSetup () {
        return $('span*=Continue without setup')
    }

    get dontShowAgain () {
        return $('[data-testid="CheckBoxIcon"]')
    }

    get continueNoSetup () {
        return $('span*=Continue without setup')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return browser.url(`${path}`);
    }
}

export default new LoginPage();
