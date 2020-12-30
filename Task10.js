    const { element, by, browser } = require("protractor");

    import{foText} from  './fortask.js';
    

    describe('angularjs page', function() {
        it('sort and print a text',async function() {

            browser.get('https://angular.io/');
            browser.manage().window().maximize();

            element.all(by.className('nav-link-inner')).get(1).click();

         var sortText=await element.all(by.css(' aio-nav-menu > aio-nav-item > div > button > span')).getText();

         var sortify=sortText.sort();
         console.log(sortify);

         element.all(by.className('nav-link-inner')).get(2).click();

         var zoroText=await element(by.css('div:nth-child(4) >div:nth-child(9) > div > a > div > h4')).getText();
         var Zoro1=zoroText.slice(33,38);
         expect(Zoro1).toEqual('zorro');
         console.log(Zoro1);

         element.all(by.css('aio-top-menu > ul>li')).get(3).click();

         // browser.sleep(5000);

        // var online= await element(by.css(' table > tbody > tr:nth-child(1) > td:nth-child(2)')).getText();
        // expect(online).toEqual('Online');
        // console.log(online);

        // var online1=await element(by.css(' table > tbody > tr:nth-child(2) > td:nth-child(2)')).getText()
        // expect(online1).toEqual('Online');
        // console.log(online1);

        // var online3=await element(by.css(' table > tbody > tr:nth-child(3) > td:nth-child(2)')).getText()
        // expect(online3).toEqual('Online');
        // console.log(online3);

        // var online4 =await element(by.css(' table > tbody > tr:nth-child(4) > td:nth-child(2)')).getText()
        // expect(online4).toEqual('Online');
        // console.log(online4);

        var aug=await element(by.css('table > tbody > tr:nth-child(11) > td:nth-child(3) > div')).getText();
        var augText=aug.slice(23,35)
        expect(augText).toEqual('August 30-31');
        console.log(augText);

        for(i=0;i<=3;i++){
            var online= await element.all(by.css(' table > tbody > tr > td:nth-child(2)')).get(i).getText();            
           expect(online).toEqual('Online');
           console.log(online)
        }

        
        
  })
})