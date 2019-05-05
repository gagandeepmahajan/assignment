module.exports = function () {

    this.Before(function () {
        this.driver.sleep(2000);
        this.driver.manage().window().maximize();
    });
    this.After(function () {
        this.driver.quit();
    });
};
