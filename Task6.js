const { element, by, browser } = require("protractor");

describe('angularjs homepage', function() {
    it('valedating the text',async function() {

      browser.get('https://angular.io/');
      browser.manage().window().maximize();


     //Doc button 
     var button=element.all(by.className('nav-link-inner')).get(1);
     button.click();

     //Angualr text
     var ang= element(by.css('aio-nav-menu >aio-nav-item:nth-child(6) > div > button > span')).getText();
     expect(ang.getText()).toEqual('ANGULAR TOOLS');
     console.log(await ang.getText());
     ang.click();

     var lang= element(by.css('aio-nav-menu >aio-nav-item:nth-child(6) > div > div > aio-nav-item:nth-child(4) > div > a > span'));
     expect(lang.getText()).toEqual('Language Service');
     console.log(await lang.getText());

     //Resources Button
     element.all(by.className('nav-link-inner')).get(2).click();
     //Education button
     element.all(by.className('button mat-button filter-button ng-star-inserted')).get(1).click();


     //German text
     var buch=  element(by.css('div:nth-child(1) >div:nth-child(4) > div > a > div > h4'));
     expect(buch.getText()).toEqual('Angular-Buch (German)');
     console.log(await buch.getText());

     button.click();

     //Footer txt
     var footer=element(by.css('a:nth-child(2) > p.card-footer'));
     expect(footer.getText()).toEqual('Introduction to Angular concepts');
     console.log(await footer.getText());

     //search
     element(by.css('aio-search-box > input')).sendKeys('service');

     //singleton services
     element(by.css('div:nth-child(4) > ul.priority-pages > li:nth-child(1) > a > span')).click();

     //var url=browser.getCurrentUrl();

     //expect(browser.getCurrentUrl()).toEqual('singleton-services');

     //console.log(await browser.getCurrentUrl());

     var url=browser.executeScript("return window.location.href.split('/')[window.location.href.split('/').length -1];")

     expect(url).toEqual('singleton-services');

     console.log(await url);
    
      
    })
})