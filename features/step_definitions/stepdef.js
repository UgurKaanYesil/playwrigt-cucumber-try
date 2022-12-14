const { Given, When, Then, BeforeAll, AfterAll, setDefaultTimeout} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const {expect} = require("chai");
const pageSelector = require('/Users/segmentify/WebstormProjects/personal/features/step_definitions/n11Selectors.json')
setDefaultTimeout(90000);

BeforeAll(async() =>{
     global.browser = await chromium.launch({ headless:true});
     global.page = await browser.newPage();
});

AfterAll(async function () {
    await browser.close();
});
When('I opened n11 site', async function () {
    await page.goto('https://www.n11.com/');
});


Then('I should be able to see brands n11 home page', async () => {
    const brands = await page.locator('#contentMain > div > div.brandsArea > div > div.brandsHeader > h3').innerHTML();
    await expect(brands).to.equal('Markalar');

});


When(/^I click the basket icon$/, async function () {
    await page.click('#header > div > div > div > div.customMenu.hMedMenu-item > div.myBasketHolder > a > i')
});
Then(/^I should be able to see basket page$/, async function () {
    await expect(page.url()).to.equal('https://www.n11.com/sepetim')
});
Given(/^I clicked to "([^"]*)" and write (.*) on searchbar$/, async function (searchbarLocator, keyword) {
    await page.fill(pageSelector[searchbarLocator], keyword)
});
When(/^I press the enter on keyboard$/, async function () {
    await page.press(pageSelector["searchbar"],'Enter')

});
Then(/^I should be able to see "([^"]*)" on screen$/, async function (productLocator) {
    await expect(pageSelector[productLocator]).to.exist;

});