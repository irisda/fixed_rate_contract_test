import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator'
import dayjs from 'dayjs'
/**
 *  page containing some helper functions and methods used during testing
 */
class Helper {
  getRandomName() {
    // big_red_donkey
    return uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })
  }

  getDateOfDay(nrDays) {
    return dayjs().add(nrDays, "day").format('MM/DD/YYYY')
  }
}

export default new Helper();
