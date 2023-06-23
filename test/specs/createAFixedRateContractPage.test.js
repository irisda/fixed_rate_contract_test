import LoginPage from '../pageobjects/login.page.js'
import { globalConfig, constantValues } from '../customConfig.js'
import FixedRateContract from '../pageobjects/fixedRateContract.page.js'
import ContractPage from '../pageobjects/contract.page.js'

describe('Validate: create a fixed rate contract', async () => {

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
        await expect(await FixedRateContract.createFixedContractHeadline.getText()).toBe('Creating a fixed contract')
        await expect(await ContractPage.contractDetailsForm).toBeDisplayed()
    })


    it('User should be able to create contract: Contract Details', async () => {
        await ContractPage.addContractName()
        await ContractPage.addContractRole(constantValues.contractRole)
        await ContractPage.savedWorkScopeDropDown()
        await ContractPage.selectScopeOfWorkText('Software Developer')
        await expect(await ContractPage.typeOfWorkScopeAdded.getText()).toBe('Software Developer')
        await ContractPage.addContractorStartDate()
        await ContractPage.addContractorTaxResidence(constantValues.contractorTaxResidence)
        await ContractPage.goNextPage()
        await ContractPage.addContractCurrencyDetails()
        await ContractPage.addContractFrequenlty('Weekly')
        await ContractPage.addContractRate()
        await ContractPage.goNextPage()
        await FixedRateContract.checkDefinesDatesPage()
        await ContractPage.goNextPage()
        await ContractPage.checkCompliancePage()
        await ContractPage.goToBenefitePage()
        await ContractPage.validateAdditionalDoc()
        await ContractPage.addSpecialClause()
        await ContractPage.createContract()

        //Validate that contract is created correclty
        await expect(browser).toHaveUrlContaining('overview')
        await ContractPage.validateContractCreation()
    })
})

