import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Helper {

    
    getRandomName() {
        // big_red_donkey
        return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })
      }
    
      
      click(ele) {
        this.waitForElement(ele)
         ele.scrollIntoView()
         ele.click()
       }

       waitForElementToExist(ele) {
        ele.waitForExist()
      }
      waitForElementToBeClickable(ele) {
        browser.waitUntil(() => ele.isClickable())
        return true
      }
      waitForElementToBeDisplayed(ele) {
        browser.waitUntil(() => ele.isDisplayed())
        ele.scrollIntoView()
        return true
      }

       waitForElement(ele) {
        this.waitForElementToExist(ele)
        this.waitForElementToBeDisplayed(ele)
        this.waitForElementToBeClickable(ele)
      }

    
   

}

export default new Helper();
