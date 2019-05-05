var assert = require('assert');
const delay = require('delay');

module.exports = function () {
    this.Given(/^I visit Bandlab$/, function () {
        return this.driver.get('https://www.bandlab.com');
    });

    this.When(/^I Login to the application with (.+) and (.+)$/, function (username, password) {
        this.driver.getTitle().then(function (title) {
            assert.equal(title, "BandLab: Music Starts Here");
            return title;
        });
        this.driver.sleep(5000);
        //Click on Log In
        this.driver.findElement({className: "button-auth button"}).click();
        this.driver.sleep(5000);
        //Enter Username and Password
        this.driver.findElement({name: "username"}).sendKeys(username);
        this.driver.findElement({name: "password"}).sendKeys(password);
        this.driver.sleep(5000);
        //Click on Log In
        this.driver.findElement({className: "scs sns xl"}).click();
        this.driver.sleep(5000);
    });

    this.When(/^I Logout from application$/, function () {
        //Click on Profile icon
        this.driver.findElement({className: "top-bar-profile-picture"}).click();
        this.driver.sleep(5000);
        //Click on logout
        this.driver.findElement({className: "icon-exit"}).click();
        this.driver.sleep(10000);
    });

    this.Then(/^Verify Create Shout button exist$/, function () {
        //Click on Create Button
        this.driver.findElement({className: "button cta single last button-create"}).click();
        this.driver.sleep(5000);
        //Verify Create Shout exist
        try {
            const createshoutbutton = this.driver.findElement({className: "icon-speaker"}).isDisplayed();
        } catch (e) {
            createshoutbutton = false;
        }
    });
};