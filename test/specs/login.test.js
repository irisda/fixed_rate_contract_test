import LoginPage from '../pageobjects/login.page.js'
import {globalConfig} from '../customConfig.js'

describe('Login Page Validation', async () => {

    beforeEach(async () => {
        await LoginPage.open(globalConfig.baseUrl)

    })

    it('Verify we are on login page', async () => {
        await LoginPage.verifyLogin()
        await expect(browser).toHaveUrlContaining('login')
    })


    it('should login with valid credentials', async () => {
        await LoginPage.login(globalConfig.email, globalConfig.password)
       
        //Wait for the browser to loaded
        await browser.pause(3000)
        const getBrowserUrl = await browser.getUrl()

        if (getBrowserUrl.includes('setup/authenticator')) {
            await LoginPage.authenticatorSetUp()
            await LoginPage.authenticatorPopUp()
        }

    })

    it('should logout from deel platform', async () => {
        await expect(browser).toHaveUrlContaining('training')
        await LoginPage.logoutFromSystem()
    })
    
})


