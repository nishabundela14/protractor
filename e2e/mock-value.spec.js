 
 describe("get logs ", function() {
    it("using page objects ", function() {
        var LoginPage = require("./login-page");
        var loginPage = new LoginPage();


        var mockModule = function() {
            angular.module('mockModule', [ 'productApp'])
                .value("apiEndPoint", "http://example.com:7070")  
                //.run(function($httpBackend) {
                    //$httpBackend.whenPOST('/api/packages').respond(200, {} );
               // })
            }

        
        // When ignoreSynchronization is true mocking doesn't work
        protractor.ignoreSynchronization = false; 
        //browser.addMockModule('mockModule', mockModule)

        browser.addMockModule('productApp', function () {
            var module = angular.module('productApp').config(['$provide', function ($provide) {
                //NOTE: for example purpose only, to overwrite existing values
                $provide.value('apiEndPoint', 'http://notfoundthere.example.com');
            }])
        });
        
         browser.get('http://localhost:8080/#/auth/login');
         loginPage.setUserName("admin");
         loginPage.setPassword("password");
         loginPage.login();

          browser.sleep(3000); 
          browser.manage().logs().get('browser').then(function(browserLog) {
            console.log('log: ', require('util').inspect(browserLog));
         });
         
         
    })
})
 
 
  