const { element, by, ExpectedConditions, browser, Button } = require("protractor");

describe('angularjs homepage', function() {
    it('should find an element', function() {
      browser.get('https://angular.io/');


      var text=element(by.className("text-headline"));
      expect(text.getText()).toEqual('DEVELOP ACROSS ALL PLATFORMS');
      
      
      var button = element(by.css('a.button')).getText();
      expect (button).toEqual('GET STARTED');
      console.log('Text on button' + button);



    var feau=element(by.css('a[title="Features."]'));
      expect(feau.getText()).toEqual('Features');

     var res=element(by.css('a[title="Resources."]')).getText();
     console.log('Text on Resources'+res);

     
      var title=element(by.tagName('title'));
      expect(title.getText()).toEqual('Angular');

      var sdpf=element(by.css('')).getText();
      expect(sdpf).toEqual('SPEED & PERFORMANCE');
      

      var searchin=element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type=search]'));
      searchin.sendKeys('Information');
      browser.sleep(5000);(by.css)
      searchin.clear();

      var searchin1=element(by.css('input[type="search"]'));
      searchin1.sendKeys('API');
      browser.sleep(5000);

      var api=element(by.css('input[type="search'));
      expect(api.getText()).toEqual('Accessibility in Angular');

      
    });
});

