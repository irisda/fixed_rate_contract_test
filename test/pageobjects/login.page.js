import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('input[name="email"]');
    }

    get inputPassword() {
        return $('input[type="password"]');
    }

    get btnSubmit() {
        return $('[data-qa="log-in"]');
    }

    get continueWithOutSetup() {
        return $('span*=Continue without setup')
    }

    get noSetupPoupTxt() {
        return $('h2[data-qa="undefined-title"]')

    }
    get dontShowAgain() {
        return $('//input[@type="checkbox"]')
    }

    //using the xpath method because of the modal presence.
    get continueNoSetup() {
        return $$('//span[text()="Continue without setup"]')[1]
    }

    get contractsBtn() {
        return $('a[href="/create"]')
    }

    get fixedRateTxt() {
        return $('h4=Fixed Rate')
    }

    get createFixedContractHeadline() {
        return $('h2=Creating a fixed contract')
    }

    get signUpBtn() {
        return $('[data-qa="sign-up"]')
    }


    get profileBtn() {
        return $('div.MuiAvatar-root.MuiAvatar-circular.MuiAvatar-colorDefault.css-1n4zqtn')
    }

    get logoutBtn() {
        return $('a=Logout')
    }

    getRandomName() {
        // big_red_donkey
        return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })
    }

    /**
    * method to open browser
    */
    open(path) {
        return browser.url(`${path}`);
    }
    /**
     * a method to login using username and password
     */

    async verifyLogin() {
        await this.inputPassword.waitForDisplayed()
        await this.inputUsername.waitForDisplayed()
        await this.signUpBtn.waitForDisplayed()
    }

    async login(username, password) {
        await browser.waitUntil(() => this.inputUsername.isDisplayed())
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForClickable({ timeout: 5000 })
        await this.btnSubmit.click()
    }
    async authenticatorSetUp() {
        await this.continueWithOutSetup.waitForDisplayed({ timeout: 30000 })
        await this.continueWithOutSetup.click()

    }
    async authenticatorPopUp() {
        await this.dontShowAgain.click()
        await this.continueNoSetup.waitForDisplayed({ timeout: 10000 })
        await this.continueNoSetup.click()
    }

    async logoutFromSystem() {
        await this.profileBtn.waitForDisplayed()
        await this.profileBtn.click()
        await this.logoutBtn.waitForDisplayed()
        await this.logoutBtn.click()
    }
}

export default new LoginPage();
