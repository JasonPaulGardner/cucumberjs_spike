## Testing Web Applications using Cucumber.js and PhantonJS

It uses [cucumber.js](https://github.com/cucumber/cucumber-js) with [PhantomJS](http://phantomjs.org).  Since PhantomJS runs as a separate process, this example uses [phantom-proxy](https://github.com/sheebz/phantom-proxy) to drive cucumber.js specs from inside of node.

### Set up

Install node.js and npm. 

Then install all the dependencies for the project:

    $ make npm

### Run the Specs

    $ make cucumber

