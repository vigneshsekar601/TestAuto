const { by, element, $, $$, browser } = require("protractor");

describe('angularjs homepage', function() {
    it('Validating and printing path from url',async function() {

     browser.get('https://angular.io/');
     browser.manage().window().maximize();

     element.all(by.className('nav-link-inner')).get(2).click();

     var Ajax=await element(by.css('div:nth-child(4) >div:nth-child(10) > div > a > div > h4')).getText();
     var Ajax1=Ajax.substring((Ajax).lastIndexOf('(')+1,(Ajax).lastIndexOf(')'));
     expect(Ajax1).toEqual('ng-zorro-antd');
     console.log(Ajax1);

     var url=await browser.getCurrentUrl();
     var path=url.substring((url).lastIndexOf('?')+1,(url).lastIndexOf('='));
     expect(path).toEqual('category');
     console.log(path);

     var rest=await element(by.css(' div:nth-child(3) > div:nth-child(9) > div > a > div > p')).getText();
     var rest1=rest.substring((rest).lastIndexOf(',')-4,(rest).lastIndexOf(','));

     // expect(rest1).toEqual('Ajax');
     console.log(rest1);

     var search=await element(by.css('aio-search-box > input')).getAttribute('placeholder');
     expect(search).toEqual('Search');
     console.log(search);

    })
})