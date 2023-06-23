import { constantValues } from '../customConfig.js';
import Helper from './helper.page.js'
const RandomName = Helper.getRandomName()
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContractPage {

    /**
     * define create a contract page selectors using getter methods
     */

    get contractsBtn() {
        return $('a[href="/create"]')
    }

    get createNewContractTxt() {
        return $('h1=Create a contract')
    }

    get fixedRateTxt() {
        return $('h4=Fixed Rate')
    }

    get payAsGoTxt() {
        return $('h4=Pay As You Go')
    }

    get milestoneTxt() {
        return $('h4=Milestone')
    }

    /**
     * Selectors on this section are global selections that can be used on difrrent contracts during the creation process
     * 
    */
    get contractDetailsForm() {
        return $('form[action]')
    }
    get contractNameField() {
        return $('input[name="name"]')
    }

    get contractRoleField() {
        return $('input[id="free-solo-job-title"]')
    }

    get closeDropDown() {
        return $('button[title="Close"]')
    }

    get nextBtn() {
        return $('[data-qa="next"]')
    }

    get scopeOfWork() {
        return $('[name="scope"]')
    }
    get scopeOfWorkDropDown() {
        return $('h6=Select saved/predefined work scopes')
    }

    get typeOfWorkScopeAdded() {
        return $('div.highlight')
    }

    get startDateField() {
        return $('input[name="effectiveDate"]')
    }

    get calendarIcon() {
        return $('[data-testid="CalendarTodayIcon"]')
    }
    get inputField() {
        return $$('input[id]')
    }
    get currencyField() {
        return $('input[id="react-select-2-input"]')
    }
    get paymentRateField() {
        return $('[name="rate"]')
    }

    get useDeelContractText() {
        return $('span=USE DEEL CONTRACT')

    }

    get contractTitle() {
        return $('h1')
    }
    get complinceDocumentCheckBox() {
        return $('[data-qa="checkbox"]')
    }
    get nextComplianceBtn() {
        return $('[data-qa="create-contract"]');
    }

    get addSpecailCase() {
        return $('span=Add')
    }
    get descriptionTextBox() {
        return $('textarea')
    }
    get attachBtn() {
        return $('[data-qa="attach"]')
    }

    get addiotnalDoc() {

        return $('h4=Additional Document')

    }

    get requiredContractNameMessage() {
        return $('p=Contract name is required')
    }

    get scopeOfworkCreation() {
        return $('[id="scope-of-work-creation"]')
    }

    get paymentRateErrorMessage() {
        return $('p*=Payment rate cannot be more than')
    }

    /***************************
    
        /**
         * a method to check if create a contract button is present, is clickable and click it
         */
    async checkContractsBtn() {
        await browser.waitUntil(() => this.contractsBtn.isClickable())
        await this.contractsBtn.click()
    }

    /**
     * methods to check if create a contract page is opened, 
     * validate create new contract with different options
     */
    async checkCreateNewContractPageOptions() {
        await this.createNewContractTxt.waitForDisplayed({ timeout: 5000 })
        await this.payAsGoTxt.waitForDisplayed({ timeout: 5000 })
        await this.milestoneTxt.waitForDisplayed({ timeout: 5000 })
        await this.fixedRateTxt.waitForDisplayed({ timeout: 5000 })
    }

    /**
    * method to create new contract with different options
    * @contractType is the type of contract e.g Pay As You Go, Fixed Rate etc
    */

    async selectAContractType(contractType) {
        const contractSelector = $(`h4=${contractType}`)
        await contractSelector.waitForDisplayed({ timeout: 5000 })
        await contractSelector.click()
    }
    /** all methods to create a new contract*/
    async addContractName() {
        await this.contractNameField.waitForDisplayed()
        await this.contractNameField.setValue(RandomName)
    }

    async addContractRole(contractRole) {
        await this.contractRoleField.waitForDisplayed()
        await this.contractRoleField.setValue(contractRole)
        await this.closeDropDown.click()
    }

    /**
* methods to create new scope of work with different options
* @workType is the type of work e.gSoftware Developer etc
*/

    async selectScopeOfWorkText(workType) {
        const workTypeSelector = $(`span=${workType}`)
        await workTypeSelector.waitForDisplayed({ timeout: 5000 })
        await workTypeSelector.click()
    }

    async savedWorkScopeDropDown() {
        await this.scopeOfWorkDropDown.waitForDisplayed()
        await this.scopeOfWorkDropDown.click()
    }

    async addContractorStartDate() {
        await this.startDateField.waitForDisplayed()
        await this.startDateField.click()
        await browser.keys('Delete')
        // -1 means that we need to get yesterday date
        await this.startDateField.setValue(Helper.getDateOfDay(-1))
        //close clendar popup
        await this.calendarIcon.click()

    }

    async addContractorTaxResidence(contractorTaxResidence) {
        await this.inputField[4].click()
        await this.inputField[4].setValue(contractorTaxResidence)

        await browser.keys('ArrowDown')
        await browser.keys('Enter')

        if (await this.inputField[5].isDisplayed()) {
            await this.inputField[5].click()
            await this.inputField[5].setValue("Colorado")
            await browser.keys('ArrowDown')
            await browser.keys('Enter')
        }
    }

    async addContractCurrencyDetails() {
        await this.currencyField.setValue(constantValues.contractCurrency)
        await browser.keys('ArrowDown')
        await browser.keys('Enter')

    }

    async addContractFrequenlty(frequntlyPay) {
        await this.inputField[2].click()
        await browser.keys('Delete')
        await this.inputField[2].setValue(frequntlyPay)
        await browser.keys('ArrowDown')
        await browser.keys('Enter')
    }

    async addContractRate() {
        await this.paymentRateField.waitForDisplayed()
        await this.paymentRateField.setValue('1000')

    }
    async goNextPage() {
        await this.nextBtn.waitForDisplayed()
        await this.nextBtn.click()
    }

    async checkCompliancePage() {
        await this.useDeelContractText.waitForDisplayed()
        await this.complinceDocumentCheckBox.waitForDisplayed()
    }

    async goToBenefitePage() {
        await this.nextComplianceBtn.waitForDisplayed()
        await this.nextComplianceBtn.click()
    }
    async validateAdditionalDoc() {
        await this.attachBtn.waitForDisplayed()
        await this.addiotnalDoc.waitForDisplayed()
    }
    async addSpecialClause() {
        await this.addSpecailCase.scrollIntoView();
        await browser.waitUntil(() => this.addSpecailCase.isDisplayed())
        await this.addSpecailCase.doubleClick()
        await this.descriptionTextBox.waitForDisplayed()
        await this.descriptionTextBox.setValue(constantValues.specialClauseExplained)
    }

    async createContract() {
        await this.nextBtn.waitForDisplayed()
        await this.nextBtn.click()
    }

    // Validate that contract is created correclty
    async validateContractCreation() {
        await this.contractTitle.waitForDisplayed()
        expect(await this.contractTitle.getText()).toBe(RandomName)
    }

    //Negative Testing Flow
    async addBlankContractName() {
        await this.contractNameField.waitForDisplayed()
        await this.contractNameField.click()
        await this.scopeOfWork.waitForDisplayed()
        await this.scopeOfWork.click()

    }

    async checkForContractNameError() {
        await expect(this.requiredContractNameMessage).toBeDisplayed()
        await this.nextBtn.scrollIntoView()
        await expect(this.nextBtn).toBeDisabled()
    }

    async addInvalidPaymentRate() {
        await this.paymentRateField.waitForDisplayed()
        await this.paymentRateField.setValue('90,000')
        await expect(this.paymentRateErrorMessage).toBeDisplayed()
        await expect(this.nextBtn).toBeDisabled()
    }

    async validateScopeOfWorkRequiredField() {
        await expect(this.nextBtn).toBeDisabled() //because scope of work is empty and it is a required field
    }

}

export default new ContractPage();
