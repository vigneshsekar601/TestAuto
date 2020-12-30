const { element, by, browser, ExpectedConditions } = require("protractor");

describe('angularjs page', function() {
    it('sort and print a text',async function() {

        browser.get('https://angular.io/');
        browser.manage().window().maximize();

         element.all(by.className('nav-link-inner')).get(1).click();

         element(by.css(' aio-nav-menu > aio-nav-item:nth-child(4) > div > button')).click();

         var sortText=await element.all(by.css(' aio-nav-menu > aio-nav-item > div > button > span')).getText();
         var sortify=sortText.sort();
         console.log(sortify);

         var sortText2=await element.all(by.css('aio-nav-menu > aio-nav-item:nth-child(4) > div > div > aio-nav-item>div')).getText();
         var sortify2=sortText2.sort();
         console.log(sortify2);

         element(by.css('aio-nav-item:nth-child(4) > div > div > aio-nav-item:nth-child(7) > div > button')).click();

         var textvalid=await element.all(by.css('aio-nav-item:nth-child(7) > div > div > aio-nav-item> div > a > span')).get(1).getText();
         expect(textvalid).toEqual('Authoring Schematics');
         console.log(textvalid);

         element(by.css('aio-nav-item:nth-child(7) > div > div > aio-nav-item:nth-child(2) > div > a > span')).click();

         var line=await element(by.css(' aio-doc-viewer > div > div.content > p:nth-child(26)')).getText();
         //var lineText=line.substring((line).indexOf('automatically'),(line).lastIndexOf('schema')+6)
         var lineText=line.split('.')[3];
         var linetext1=lineText.split('is')[1];
         console.log(linetext1);
         
         element.all(by.css('aio-top-menu > ul>li')).get(3).click();
        
         var valid11= element.all(by.css(' table > tbody > tr> th > a'));            
         for(i=5;i<=10;i++){
             var valid=await valid11.get(i).getText();
             console.log(valid);           
         }
          var notTobe=await valid11.get(10).getText();
          expect(notTobe).not.toEqual('NGDE');
    })
})