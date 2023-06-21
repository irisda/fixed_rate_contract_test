import LoginPage from '../pageobjects/login.page.js'
import globalConfig from '../customConfig.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open(globalConfig.baseUrl)
        await LoginPage.login(globalConfig.email, globalConfig.password)
        await browser.pause(99000)

       
    })
})


