//this is a test case file (they all have the same pattern)

//for Node testing, require chai
//this is not needed for browser testing
//var chai = require('chai');

//set up the assert variable, so we don't need to keep typing chai.assert
let assert = chai.assert;

//a 'describe' block, used to group individual tests
//first parameter indicates what we're testing
describe('Array', function() {
  //inside, there are 'it' blocks
  //first parameter of it block needs to be a human readable descriptions
  it('should start empty', function() {
    let arr = [];

    assert.equal(arr.length, 0);
  });
});
