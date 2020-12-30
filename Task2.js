const { element, by, browser } = require("protractor");
const { async } = require("q");

describe('angularjs homepage', function() {
    it('should find an element',async function() {

      browser.get('https://angular.io/');
      browser.manage().window().maximize();

      var a2=await element(by.css('a[title="Features."]>span')).getText();
       expect(a2).toEqual('FEATURES');
      console.log(a2);

      
      var b=await element(by.css('a.button')).getText();
      expect(b).toEqual('GET STARTED');
      console.log( b);

      var c=element(by.css('input[type=search]')).sendKeys('information');
      browser.sleep(5000);    

      


    })
})