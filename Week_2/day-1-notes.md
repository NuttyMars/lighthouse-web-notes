## Built-in assert library for node

assert.equal (==)

assert.strictEqual (===)

assert.deepEqual (for arrays and objects)


>## To prevent errors in assertions from stopping the code:
>
>```javascript
>try{
>  call the function
>} catch(error) {
>  console.log(message you want to see)
>}
>```

## Install Mocha & Chai dependencies

`npm install --save-dev mocha chai`

## Chai
can use
* expect (const expect = chai.expect;)
  * expect(bla).to.be.a('type')
  * expect(bla).to.equal(value)
  * expect(bla).to.have.lengthOf(number)
  * expect(bla).to.have.property('propertyName').**with**.lengthOf(number)
* assert
  * assert.typeOf(what, value)
  * assert.equal(what, value)
  * assert.lengthOf(what, value)
  * assert.property(what, value)
  * assert.lengthOf(what, value)
* should
  * should.be.a('type')
  * should.equal(value)
  * should.have.lengthOf(number)
  * should.have.property('propertyName').**with**.lengthOf(number)
....

## Mocha BBD 
The BDD interface provides 
* describe()
* context()
  * is an alias for describe and behaves the same way
  * provides a way to keep tests easier to read and organized
  > ex:
  > describe
  >   context (this context is the same as describe but helps show there's nesting)
  >     it
* it()
* specify() = is an alias for it and behaves the same way
* before()
* after()
* beforeEach() 
* afterEach()

## Mocha TDD
The TDD interface provides
* suite()
* test()
* suiteSetup()
* suiteTeardown()
* setup()
* teardown()


>rm --cached (if we want to remove a file/folder that was created prior to the change)


## Async flow control

npm library: [async](https://www.npmjs.com/package/async)

## setTimeout

* The setTimeout function is used to defer code execution by a specified number of milliseconds
* A callback is passed in to setTimeout and setTimeout calls it after x ms
* It's used on many websites to delay a message or response
