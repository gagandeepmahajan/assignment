var assert = require('assert');
var chai = require('chai');
var assertchai = chai.assert;
const delay = require('delay');

module.exports = function () {

    this.When(/^I Navigate to My Projects$/, function () {
        delay(10000);
        //Click on Library
        this.driver.findElement({linkText: "Library"}).click();
        this.driver.sleep(2000);
        //Click on My Projects
        this.driver.findElement({xpath: "/html/body/main/div/div[2]/section/div/div/div[1]/aside/nav/a[2]/span"}).click();
        this.driver.sleep(2000);
    });

    this.When(/^I Navigate to Invite Collaborator screen$/, function () {
        //Click on ellipses icon
        this.driver.findElement({css: "body > main > div > div.grid-block > section > div > div > div.grid-content.small-12.medium-8 > div:nth-child(2) > div.card > div > div > project-tile > div > div.profile-tile-footer > div > button > span"}).click();
        this.driver.sleep(2000);
        //Click on Invite Collaborators option
        this.driver.findElement({linkText: "Invite Collaborators"}).click();
        this.driver.sleep(2000);
        delay(5000);
    });

    this.Then(/^Enter (.+) and (.+) text in respective field and confirm$/, function (people, message) {
        //Input data in People and Message text field and verify the same
        this.driver.findElement({name: "inviteUser"}).sendKeys(people);
        this.driver.findElement({name: "message"}).click();
        this.driver.findElement({name: "message"}).sendKeys(message);
        const messagetextfield = this.driver.findElement({name: "message"});
        messagetextfield.getAttribute('value').then(function (innerText) {
            return assert.equal(innerText, message);
        });
        delay(5000);
    });
};
