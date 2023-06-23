
class HomePage {

    get homeBtn() {
        return $$('a[href="/"]')
    }

    get headerTitle() {
        return $('[data-qa="page-header-title"]')
    }

    get notificationsBtn() {
        return $('.notifications')
    }

    get createContractBtn() {
        return $('a[href="/create"]')
    }

    get contractsBtn() {
        return $('a[href="/contracts"]')
    }

    get helpFeedbackBtn() {
        return $('span=Help & Feedback')
    }

    get withdrawMoneyLink() {
        return $('a=How to withdraw money from Deel')
    }

    get signContractLink() {
        return $('a=How do I sign my contract as a contractor?')
    }

    get supportText() {
        return $('h4=How can I get support?')
    }

    get helpCenterLink() {
        return $('a[href="https://help.letsdeel.com/hc/en-gb"]')
    }

    get blogLink() {
        return $('a[href="https://www.deel.com/blog"]')

    }

    get mytaskText() {
        return $('h4=My tasks')
    }

    get quickAccessText() {
        return $('h4=Quick access')
    }

    get contractsText() {
        return $('h4=Contracts')
    }

    async checkHomePageElements() {
        await this.headerTitle.waitForDisplayed()
        await this.notificationsBtn.waitForDisplayed()
        await this.createContractBtn.waitForDisplayed()
        await this.contractsBtn.waitForDisplayed()
    }

    async checkHelpFeedback() {
        await this.helpFeedbackBtn.waitForDisplayed()
        await this.helpFeedbackBtn.click()
        await this.withdrawMoneyLink.waitForDisplayed()
        await this.signContractLink.waitForDisplayed()
    }

    async checkBlogElements() {
        await this.supportText.scrollIntoView()
        await this.blogLink.waitForDisplayed()
        await this.helpCenterLink.waitForDisplayed()
    }

    async validateSidePageElements() {
        await this.mytaskText.waitForExist()
        await this.contractsText.waitForDisplayed()
        await this.quickAccessText.waitForExist()
    }

}

export default new HomePage()