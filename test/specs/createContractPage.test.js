import LoginPage from '../pageobjects/login.page.js'
import { globalConfig } from '../customConfig.js'
import ContractPage from '../pageobjects/contract.page.js'


describe('Validate: create contract with diffrent types', async () => {

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

    it('User should be on create a contracte page', async () => {
        await ContractPage.checkContractsBtn()
        await expect(browser).toHaveUrlContaining('contractor')
        await ContractPage.checkCreateNewContractPageOptions()
    })
})


