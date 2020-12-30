const { url } = require("inspector");
const { element, by, browser } = require("protractor");

describe('angularjs homepage', function() {
    it('valedating the text using index position',async function() {

      browser.get('https://angular.io/');
      browser.manage().window().maximize();

      var indpos=await element.all(by.className('text-headline')).get(2).getText();
      expect(indpos).toContain('INCREDIBLE TOOLING');
      console.log(indpos);

      element(by.css('li:nth-child(3) > a > span')).click();

      var toolt=element(by.css(' div.l-flex--column.align-items-center > div > div:nth-child(2) > h3')).getText();
      expect(toolt).toEqual('Tooling');

      var angpre=await element(by.css('div:nth-child(2) > div:nth-child(3) > div > a > div > h4')).getText();
      expect(angpre).toEqual('Angular CLI');
      console.log(angpre);

      var subt=await element(by.css('div:nth-child(2) > div:nth-child(3) > div > a > div > p')).getText();
      expect(subt).toEqual('The official Angular CLI makes it easy to create and develop applications from initial commit to production deployment. It already follows our best practices right out of the box!');
      console.log(subt);

      element(by.css('aio-search-box > input')).sendKeys('service');

      element(by.css('div:nth-child(4) > ul.priority-pages > li:nth-child(1) > a > span')).click();

      var url=await browser.getCurrentUrl();
      console.log(url);

    })
})