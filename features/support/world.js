var seleniumWebdriver = require('selenium-webdriver');
//var firefox = require('geckodriver');
var chrome = require('chromedriver');

function CustomWorld() {
    this.driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();
}

module.exports = function () {
    this.World = CustomWorld;
    this.setDefaultTimeout(50 * 1000);
};
