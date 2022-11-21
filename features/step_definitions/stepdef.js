const assert = require('assert');
const { Given, When, Then, BeforeAll, AfterAll, After} = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const {expect} = require("chai");

BeforeAll(async() =>{
     global.browser = await chromium.launch({ headless:true });
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