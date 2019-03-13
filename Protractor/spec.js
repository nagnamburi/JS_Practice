//import { element, by } from "protractor";

//import { browser } from "protractor";

describe('Enter name feature', function(){

    it('should enter name as Tom', function(){

        browser.get('https://angularjs.org/');
        element(by.model('yourName')).sendKeys('Tom');
        var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(text.getText()).toEqual('Hello Tomasas!');
        
    })
});

//describe('test case 2')
