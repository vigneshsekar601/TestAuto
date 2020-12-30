const { get } = require("http");
const { element, by, browser } = require("protractor");
const { async } = require("q");

describe('angularjs homepage', function() {
    it('should find an element',async function () {
      browser.get('https://angular.io/');
      browser.manage().window().maximize();

      var a = await element(by.css('li:nth-child(1) > a > span')).click();
      browser.sleep(5000);
     // console.log(a);

      var y=await element(by.css('div:nth-child(2) > div.feature-row > div:nth-child(1) > div')).getText();
      console.log(( y).toUpperCase());

      var b=await element(by.css('div:nth-child(3)>  div.feature-row > div:nth-child(2) > p')).getText();
      console.log(b);
     
      var c= element(by.css('input[type=search]')).sendKeys('Information');

      var d= element(by.css('ul.priority-pages >li:nth-child(4) > a > span')).getText();
      expect(d).toEqual('Hierarchical injectors'); 

      


     /*c.clear();
     browser.sleep(2000);

     c.sendKeys('Platform');
     browser.sleep(3000);
*/
     var input=await element(by.css('div:nth-child(4) >ul.priority-pages > li:nth-child(2) > a > span')).getText();
     console.log(input);

  })
})