const { element, by, ExpectedConditions } = require("protractor");

describe('angularjs page', function() {
    it('sort and print a text',async function() {

        browser.get('https://angular.io/');
        browser.manage().window().maximize();

        element.all(by.className('nav-link-inner')).get(1).click();

        var linkText=await element(by.linkText('TypeScript')).getAttribute('href');
        expect(linkText).toEqual('https://www.typescriptlang.org/');
        console.log(linkText);

        element(by.css('aio-nav-menu > aio-nav-item:nth-child(2) > div > button > span')).click();

        element(by.css('aio-nav-menu >aio-nav-item:nth-child(2) > div > div > aio-nav-item:nth-child(2) > div > a > span')).click();

        var img=await element(by.css('div.lightbox > img')).isDisplayed();
        console.log(img);

        

        element(by.css('aio-nav-item:nth-child(2) > div > div > aio-nav-item:nth-child(1) > div > button')).click();
        element(by.css('aio-nav-item:nth-child(2) > div > div > aio-nav-item:nth-child(1) > div > div > aio-nav-item:nth-child(5) > div > a')).click();
        

        var black=await element(by.css('code-example:nth-child(15) > aio-code > pre')).isDisplayed();
        console.log(black)

        var coBo=await element(by.css('code-example:nth-child(15) > aio-code > pre > button')).isDisplayed();
        console.log(coBo);


       })
})