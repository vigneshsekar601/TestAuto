const { element, by } = require("protractor");
const { async } = require("q");

describe('angularjs homepage', function() {
    it('should find an element',async function() {

      browser.get('https://angular.io/');
      browser.manage().window().maximize();


      var a=element(by.css('div.text-container:nth-child(1)>div>div')).getText();
      expect(a).toEqual('SPEED & PERFORMANCE');
     

      var b=await element(by.css('li:nth-child(3) > a > span')).getText();
      expect(b).toEqual('RESOURCES');
      console.log(b);


      var c=element(by.css('input[type=search]')).sendKeys('API');
      browser.sleep(5000);    

      var d =element(by.css('div:nth-child(3) > ul:nth-child(3) > li:nth-child(2) > a > span')).getText();
      expect(d).toEqual('Accessibility in Angular');


    })
})