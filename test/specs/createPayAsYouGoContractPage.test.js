import LoginPage from '../pageobjects/login.page.js'
import { globalConfig, constantValues } from '../customConfig.js'
import payAsYouGoContract from '../pageobjects/payAsYouGoContract.page.js'
import ContractPage from '../pageobjects/contract.page.js'

describe('Validate: create a payAsYouGo rate contract', async () => {

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

    it('User should be able to select a PayAsYouGo contract', async () => {
        await ContractPage.checkContractsBtn()
        //should be on create contract page
        await expect(browser).toHaveUrlContaining('create?contract-type=contractor')
        await ContractPage.selectAContractType(constantValues.payAsYouGoType)
        //should be on create pay as you go contract page
        await expect(browser).toHaveUrlContaining('pay-as-you-go')
        await expect(await payAsYouGoContract.createPayAsYouGoContractHeadline.getText()).toBe('Creating a pay as you go contract')
        await expect(await ContractPage.contractDetailsForm).toBeDisplayed()
    })


    it('User should be able to create PayAsYouGo contract: Contract Details', async () => {
        await ContractPage.addContractName()
        await ContractPage.addContractRole(constantValues.contractRole)
        await ContractPage.savedWorkScopeDropDown()
        await ContractPage.selectScopeOfWorkText('Software Developer')
        await expect(await payAsYouGoContract.typeOfWorkScopeAdded.getText()).toBe('Software Developer')

        await ContractPage.addContractorStartDate()

        await ContractPage.addContractorTaxResidence(constantValues.contractorTaxResidence)
        await ContractPage.goNextPage()
        await payAsYouGoContract.validateFixedRateSelection()
        await ContractPage.addContractCurrencyDetails()
        await ContractPage.addContractFrequenlty('Week')
        await ContractPage.addContractRate()
        await ContractPage.goNextPage()
        await payAsYouGoContract.validateDefinesDates()
        await ContractPage.goNextPage()
        await ContractPage.checkCompliancePage()
        await ContractPage.goToBenefitePage()
        await payAsYouGoContract.validatesExtraBenefitesPage()
        await ContractPage.validateAdditionalDoc()
        await ContractPage.createContract()
        await expect(browser).toHaveUrlContaining('overview')
        await ContractPage.validateContractCreation()
        await browser.pause(5000)
    })
})


