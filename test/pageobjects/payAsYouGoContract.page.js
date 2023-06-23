
import ContractPage from './contract.page.js'
/**
 * sub page containing specific selectors and methods for a specific page
 */
class payAsYouGoContract {
    /**
     * define selectors using getter methods
     */

    get createPayAsYouGoContractHeadline() {
        return $('h2=Creating a pay as you go contract')
    }

    get currencyField() {
        return $('input[id="react-select-2-input"]')
    }

    get defineFirstPAyment() {
        return $('[data-qa="selector-first-payment-date"]')
    }

    get terminationDate() {
        return $('h4=Termination Date')
    }
    get noticePeriod() {
        return $('h4=Notice Period')
    }
    get changeBtn() {
        return $('span=Change')
    }

    async validateDefinesDates() {
        await this.defineFirstPAyment.waitForDisplayed()
        await this.defineFirstPAyment.isClickable()
    }

    async validatesExtraBenefitesPage() {
        await this.terminationDate.waitForDisplayed()
        await this.noticePeriod.waitForDisplayed()
        await this.changeBtn.waitForDisplayed()
    }


    async createContract() {
        await ContractPage.nextBtn.waitForDisplayed()
        await ContractPage.nextBtn.click()
    }

    async validateFixedRateSelection() {
        await expect(this.validateFixedRateSelection).toBeSelected
    }
}

export default new payAsYouGoContract();
