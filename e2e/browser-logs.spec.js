

describe("get logs ", function() {
    it("using page objects ", function() {
        var LoginPage = require("./login-page");
        var loginPage = new LoginPage();

         browser.get('http://localhost:8080/#/auth/login');
         loginPage.setUserName("admin");
         loginPage.setPassword("password");
         loginPage.login();

          browser.sleep(3000); 
          browser.manage().logs().get('browser').then(function(browserLog) {
            console.log('log: ', require('util').inspect(browserLog));
            //console.log('log: ', browserLog);
         });
         
          //expect(element(by.binding("errorMessage")).getText()).toEqual('invalid username/password');
    })
})