var myStepDefinitionsWrapper = function () {
  this.World = require("../support/world.js").World; // overwrite default World constructor
  
  this.Given(/^a phantomjs browser engine connected via phantom-proxy$/, function(callback) {
    if(this.phantom===undefined) {
      callback.fail('No phantom-proxy bridge present');
    } else {
      callback();
    }
  });
  
  this.When("I visit a web page", function(callback) {
      this.visit('http://www.w3.org', function(result) {
	     callback();
	  });
  });

  this.When("the web page is loaded", function(callback) {
    var results = {'isPageLoaded': false};
    this.results = results;
    this.proxy.page.waitForSelector('body', function(result) {
          results['isPageLoaded'] = result;
          callback();
        });
  });

  this.Then("the page will finish rendering", function(callback) {
    this.proxy.end();
    if(this.results['isPageLoaded']) {
      callback();
    } else {
      callback.fail('Page did not render');
    }
  });
};

module.exports = myStepDefinitionsWrapper;

