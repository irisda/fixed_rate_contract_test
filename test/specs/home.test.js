import LoginPage from "../pageobjects/login.page.js";
import {globalConfig} from "../customConfig.js";
import HomePage from "../pageobjects/home.page.js"

describe('Home page validation', async () => {

    before(async () => {
        await LoginPage.open(globalConfig.baseUrl)
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

    it('Verify we are on home page', async () => {
        await expect(browser).toHaveUrlContaining('training')
    })

    it('Validate home page elements', async () => {
        await HomePage.checkHomePageElements()
        await HomePage.checkHelpFeedback()
    })

    it('Validate support section', async () => {
        await HomePage.checkBlogElements()
    })

    it('Validate side elements on HomePage', async () => {
        await HomePage.validateSidePageElements()
    })

  













    

})