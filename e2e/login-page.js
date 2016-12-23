function LoginPage() {
    this.setUserName = function(username) {
         element(by.model("username")).sendKeys(username);
    }

    this.setPassword = function(password) {
         element(by.model("password")).sendKeys(password);
    }

    this.login = function() {
        element(by.css('[ng-click="login()"]')).click();
    }
    
}

module.exports = LoginPage;