const { element, by, browser } = require("protractor");

describe('angularjs homepage', function() {
    it('Validating and printing the text',async function() {

     browser.get('https://angular.io/');
     browser.manage().window().maximize();

     element.all(by.className('nav-link-inner')).get(2).click();

     var zoroText=await element(by.css('div:nth-child(4) >div:nth-child(9) > div > a > div > h4')).getText();
     var Zoro1=zoroText.substring((zoroText).indexOf('-')+1,(zoroText).lastIndexOf('-')-5);
     expect(Zoro1).toEqual('zorro');
     console.log(Zoro1);

     var media=await element(by.css('div:nth-child(4) > div:nth-child(5) > div > a > div > p')).getText();
     var mediaText= media.substring((media).indexOf('(')-20,(media).lastIndexOf('(')-1);
     expect(mediaText).toEqual('Social Media Logins');
     console.log(mediaText)

     element.all(by.className('button mat-button filter-button ng-star-inserted')).get(1).click();

     var ang=await element(by.css('div:nth-child(3) > div:nth-child(6) > div > a > div > p')).getText();

     var angtext= ang.substring((ang).indexOf(',')+2,(ang).lastIndexOf('Type')-2);
     expect(angtext).toEqual('Angular CLI');
     console.log(angtext);

     element(by.css('aio-search-box > input')).sendKeys('component');
     element(by.css('div:nth-child(4) > ul.priority-pages > li:nth-child(4) > a > span')).click();
     var comp=await element(by.css('aio-search-box > input')).getAttribute('value');
     expect(comp).toEqual('component');
     console.log(comp);

    })
    
})