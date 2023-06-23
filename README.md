# deel_contract_test
This repository contains tests to create a "Fixed Rate" contract on Deel Platform.The postive flow that is automated is to create a fixed rate contract, a pay as you go contract, login, logout and home page elements. I have included some negative test flows for fixes rate where I validated contract name, scope of work as required fields and payment rate regarding the boundary maximum value. The framework for automation is webdrverIO, allure report for test results and mocha as a test runner. On the wdio config file I have increased the default timeout for all waitFor* commands.

Regarding the test structure I have used PageObject principles and I have put all the slectors and functions inside of pagaes outside of testing files.All the files that contains page elements are under pageobject folder and are named based on the 'pageToBeValidated.page.js'. All the test files are under specs folder named based on the test page or functionality that is testing like 'hame.test.js'. I have created a customConfig files where I have put some constant variables we need during the testing. Helper.js file also contains some helper functions we need to use during the testing. On the webdrvier.io configuration I have put up a structure regarding the suites. Suite is a test file which groups some specs.

 # Note***
I have use Wait for the browser to loaded for almost 3 seconds in cases where browser takes some time to laded. This is not the best practise but it was the only that was working on this case
       " await browser.pause(3000)"



# Setup 
Before trying to run the test cases you need to setup the project

## Steps to follow:
1)Install nodejs latest version

2)Go to the root folder of the project

3)Run "npm install"

4)Run "npm run test" to run all the tests

5)Run "npm run report" to generate allure report


# Run all tests:
npm run test

# Run a specific test :
npm run test --mochaOpts.grep "Test Name"

# Run a specific suite:
**define suites in the config file and run just the test files defined by in a suite
npm run test --suite createFixedRateContract



