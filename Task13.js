const { element, by, browser  } = require("protractor");


describe('angularjs page', function() {
    it('sort and print a text',async function() {

         browser.get('https://angular.io/');
         browser.manage().window().maximize();
           
         var b1=element.all(by.className('nav-link-inner')).get(1);
         b1.click();

         element(by.css('aio-nav-menu > aio-nav-item:nth-child(3) > div > button > span')).click();

         element(by.css('aio-nav-item:nth-child(3) > div > div > aio-nav-item:nth-child(1) > div > button')).click();

         var compInt=await element(by.css('aio-nav-item:nth-child(3) > div > div > aio-nav-item:nth-child(1) > div > div > aio-nav-item:nth-child(4) > div > a')).getText();
         
         // 'Component Interaction'
         if(compInt=='Component Interaction'){
            console.log('correct');
            element.all(by.css('aio-top-menu > ul>li')).get(3).click();
              for(i=0;i<=3;i++){
                  var online=await element.all(by.css(' table > tbody > tr > td:nth-child(2)')).get(i).getText();
                  expect(online).toEqual('Online');
                  console.log(online);
                }
                b1.click();
                expect(compInt).toEqual('Component Interaction');
                console.log(compInt);
            }

            else{
                console.log('wrong');
                element.all(by.className('nav-link-inner')).get(2).click();
                element(by.css('div.flex-center.group-buttons > a:nth-child(2)')).click();  
                var ang=await element(by.css('div:nth-child(3) > div:nth-child(6) > div > a > div > p')).getText();
                var angtext= (ang.split(',')[1]);
                expect(angtext.trimLeft()).toEqual('Angular CLI');
                console.log(angtext);
                b1.click();
                expect(compInt).toEqual('Component Interaction');
                console.log(compInt);
            }
        })
    })