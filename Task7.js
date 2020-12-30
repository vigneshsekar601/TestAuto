const { element, by, browser } = require("protractor");

describe('angularjs homepage', function(){
     it('Validating and printing path from url',async function() {

      browser.get('https://angular.io/');
      browser.manage().window().maximize();
     
     //Docs button
     var button=element.all(by.className('nav-link-inner')).get(1);
     button.click();

     //Getstarted
     element(by.css('a:nth-child(1) > section')).click();
     //Javascript
     element(by.css('ul:nth-child(9) >li:nth-child(1) > a')).click();
     
     //Navigation to Non-Angular page
     browser.waitForAngularEnabled(false);
     var url=await browser.getCurrentUrl();
     console.log(url);
     browser.sleep(2000);
     
     //Navigating back
     browser.waitForAngularEnabled(true);
     browser.navigate().back();

     //Resources Button
     element.all(by.className('nav-link-inner')).get(2).click();
     //Education Button
     element.all(by.className('button mat-button filter-button ng-star-inserted')).get(1).click();
     
     //Getting Eucation url
     var url= await browser.getCurrentUrl();
     //Getting the text Education
     var path=url.substring((url).lastIndexOf('=')+1)
     expect(path).toEqual('education');

     console.log(url);
     console.log(path)
     
     //Docs button
     button.click();

     //Counting Number og links in the paragraph
     var lcount=await element.all(by.css('div.content > p:nth-child(6)>a')).count();
     console.log('number of links'+'='+lcount);

    })
})