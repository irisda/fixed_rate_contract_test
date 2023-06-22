import LoginPage from '../pageobjects/login.page.js'
import globalConfig from '../customConfig.js'

describe('My Login application', async () => {

    beforeEach(async () => {
        await LoginPage.open(globalConfig.baseUrl)

    })


    it('should login with valid credentials', async () => {
        await LoginPage.login(globalConfig.email, globalConfig.password)
       
        //Wait for the browser to loaded
        await browser.pause(1000)
        const getBrowserUrl = await browser.getUrl()

        if (getBrowserUrl.includes('setup/authenticator')) {
            await LoginPage.authenticatorSetUp()
            await LoginPage.authenticatorPopUp()
        }

    })

    it('should be able to see create contract properties', async () => {
        await LoginPage.checkContractsBtn()
        await expect(browser).toHaveUrlContaining('contractor')

        await LoginPage.validateAddNewContract()

        await expect(await LoginPage.createFixedContractHeadline.getText()).toBe('Creating a fixed contract')
        await browser.pause(90000)


    })
})


