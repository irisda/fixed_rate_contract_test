
/**
 * sub page containing specific selectors and methods for a specific page
 */
class FixedRateContract {
    /**
     * define selectors using getter methods
     */

    get createFixedContractHeadline() {
        return $('h2=Creating a fixed contract')
    }
    get fullAmount() {
        return $('[data-qa="full"]')
    }

    get noticePeriodForm() {
        return $('[data-qa="notice-period-form"]')
    }

    
    get endDateField() {
        return $('[data-qa="end-date-form"]')
    }
    
    async checkDefinesDatesPage() {
        await expect(this.fullAmount).toBeDisplayed()
        await expect(this.noticePeriodForm).toBeDisplayed()
        await expect(this.endDateField).toBeDisplayed()
    }
}

export default new FixedRateContract();
