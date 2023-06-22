import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'
import globalConfig from '../customConfig.js';
import Helper from './helper.page.js';
import dayjs from 'dayjs'
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

    get noSetupPoupTxt(){
        return $('h2[data-qa="undefined-title"]')
        
    }
    get dontShowAgain() {
        return $('//input[@type="checkbox"]')
    }

    //using the xpath method because of the modal presence.
    get continueNoSetup() {
        return $$('//span[text()="Continue without setup"]')[1]
    }

    get contractsBtn(){
        return $('a[href="/create"]')
    }

    get fixedRateTxt(){
        return $('h4=Fixed Rate')
    }

    get createFixedContractHeadline(){
        return $('h2=Creating a fixed contract')
    }

    get contractDetailsForm(){
        return $('form[action]')
    }

    get contractNameField(){
        return $('input[name="name"]')
    }

    get contractRoleField(){
        return $('input[id="free-solo-job-title"]')
    }

    get startDateField(){
        return $('input[name="effectiveDate"]')
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
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.waitForClickable({ timeout: 5000 })
        await this.btnSubmit.click()
    }
    async authenticatorSetUp(){
        await browser.waitUntil(() => this.continueWithOutSetup.isDisplayed())
        await this.continueWithOutSetup.click()

    }
    async authenticatorPopUp(){
        await this.dontShowAgain.click()
        await this.continueNoSetup.waitForDisplayed({ timeout: 10000 })
        await this.continueNoSetup.click()
    }
       
    // console.log(await this.noSetupPoupTxt.getText())


    async checkContractsBtn(){
        await browser.waitUntil(() => this.contractsBtn.isClickable())
        await this.contractsBtn.click()
       
    }
    async validateAddNewContract(){
        await browser.waitUntil(() => this.fixedRateTxt.isDisplayed())
        await this.fixedRateTxt.waitForExist({ timeout: 10000 })
        await this.fixedRateTxt.click()

        await browser.waitUntil(() => this.createFixedContractHeadline.isDisplayed())
        await browser.waitUntil(() => this.contractDetailsForm.isDisplayed())

      
        await this.contractNameField.waitForExist()
        await this.contractNameField.setValue(this.getRandomName())
        await this.contractRoleField.setValue(globalConfig.contractRole)
         Helper.click(this.contractNameField)


         await this.startDateField.clearValue()

         const now = dayjs();
const tomorrow = now.add("1", "day");

// Prints "2021-01-10T11:28:17+01:00"
console.log(tomorrow,"hi");
    }

}

export default new LoginPage();
