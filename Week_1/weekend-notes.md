## Modules in Node === no more copy pasting!

* modules are its way of organizing code into individual files
* every js file in node is implicitly a module
  * we can console.log(module) and see its details
* module.exports tells node what to export from a file
  * it defaults to {}
* we can use require with relative paths (like ./myModule)
  * it doesn't need the .js extension, as that is implied

> to call a module:
> ```javascript
> //if in the same folder
> const someName = require('./fileName.js');
> //inside fileName.js
> module.exports = someName;

## Automated testing

Setting up a test runner page for testing with Mocha and Chai in the browser:
[file here](./testrunner,html)


### Setup projects with testing subfolders:

1. Create directory + main js file
2. Create subfolder test + test case file
  >Setting up the test case files:
  >[file here](.arrayTest.js)
3. Create test script so we can run 'npm test' instead of the path
  * run `npm init` (this sets up a new package.json file)
  * update the scripts in package.json file:
  >`"scripts": {
  >"test": "./node_modules/mocha/bin/mocha"`
4. Set up mocha/chai framework:
  >npm install mocha chai --save-dev
