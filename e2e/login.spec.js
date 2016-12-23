describe("login test ", function() {
   

    it("send keys", function() {

         browser.get('http://localhost:8080/#/auth/login');

         expect(browser.getTitle()).toEqual('Product App-');
 
         browser.sleep(3000);
    })


     it("send keys", function() {

         browser.get('http://localhost:8080/#/auth/login');

         element(by.model("username")).sendKeys("admin");
         element(by.model("password")).sendKeys("admin");
         //element(by.model("password")).sendKeys("password", protractor.Key.ENTER);

         browser.sleep(3000);
         element(by.css('[ng-click="login()"]')).click();
         
         expect(browser.getTitle()).toEqual('Product App-Home');
         
         browser.sleep(3000);
    })

      it("wrong password", function() {

         browser.get('http://localhost:8080/#/auth/login');

         element(by.model("username")).sendKeys("admin");
         
         element(by.model("password")).sendKeys("password", protractor.Key.ENTER);

         browser.sleep(3000); 
         
         expect(element(by.binding("errorMessage")).getText()).toEqual('invalid username/password');

          
         
         browser.sleep(3000);
    })

    it("using page objects ", function() {
        var LoginPage = require("./login-page");
        var loginPage = new LoginPage();

         browser.get('http://localhost:8080/#/auth/login');
         loginPage.setUserName("admin");
         loginPage.setPassword("admin");
         loginPage.login();

          browser.sleep(3000); 
          expect(browser.getTitle()).toEqual('Product App-Home');
         
          //expect(element(by.binding("errorMessage")).getText()).toEqual('invalid username/password');
    })
})