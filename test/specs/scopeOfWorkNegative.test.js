import LoginPage from '../pageobjects/login.page.js'
import { globalConfig, constantValues } from '../customConfig.js'
import ContractPage from '../pageobjects/contract.page.js'


describe('Validate: User should not be able to go to payment details without scope of work as it is required field', async () => {

    before(async () => {
        await LoginPage.open(globalConfig.baseUrl)
        await LoginPage.login(globalConfig.email, globalConfig.password)
    })


    it('User should continue withOut Authenticator SetUp', async () => {
        //Wait for the browser to loaded
        await browser.pause(3000)
        const getBrowserUrl = await browser.getUrl()
        if (getBrowserUrl.includes('setup/authenticator')) {
            await LoginPage.authenticatorSetUp()
            await LoginPage.authenticatorPopUp()
        }

    })

    it('User should be able to select a fixed rate contract', async () => {
        await ContractPage.checkContractsBtn()
        //should be on create contract page
        await expect(browser).toHaveUrlContaining('create?contract-type=contractor')
        await ContractPage.selectAContractType(constantValues.fixedRate)
        //should be on create fixed rate contract page
        await expect(browser).toHaveUrlContaining('fixed')
    })

    it('User  should not be able to finish general info  without invalid scope of work', async () => {
        await ContractPage.addContractName()
        await ContractPage.addContractRole(constantValues.contractRole)
        await ContractPage.savedWorkScopeDropDown()
        await ContractPage.addContractorStartDate()
        await ContractPage.addContractorTaxResidence(constantValues.contractorTaxResidence)
        await ContractPage.validateScopeOfWorkRequiredField()
    })

})