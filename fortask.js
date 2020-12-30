const { async } = require("q");


export async function text(){
  element.all(by.css('aio-top-menu > ul>li')).get(3).click();
              for(i=0;i<=3;i++){
            var online=await element.all(by.css(' table > tbody > tr > td:nth-child(2)')).get(i).getText();            
           expect(online).toEqual('Online');
        }
      }