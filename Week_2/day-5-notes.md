## Promises

A promise represents the eventual result of an asynchronous operation

>A promise is an object  which represents a (usually asynchronous) task that will execute and the end result of said task (fulfilled or rejected). 
>
>We can add callbacks to it in order to handle these end results.
>
>Promises do not rely on anything other than basic JavaScript
>
>As of ES6, JavaScript has promises supported natively in its code. In other words, they are built into the language (via Promise)

There's more to promises than just avoiding nested callbacks, such as:

* Error handling becomes much simpler with promises
* Promises make asynchronous code easier to unit test
* Promise.all (introduced by MPJ's video) can be used to run multiple async operations in parallel and have a single callback to see all the results together

!! When creating a promise, it needs two callback functions, one for success (resolve) and one for failure (reject)

## OOP

-> key-value pairs = properties
-> an object's collection of 'static' properties = state
-> when a property's value is a function = method
-> when a prperty is a method = behaviour
-> `this` refers to the object that the method was called on

>=> an object is a bundle of state(information) and behaviour(methods)

## Classes

In OOP, classes are blueprints (templates) that we use to create instances of objects. 
A class describes what the object is going to be and we can create new objects using the class

>a class name should always be a noun
>
>the first letter should always be capitalized

!! When you create an object using a class, it is an instance of that class

!! Primitives have their own class constructors, but it is bad practice to use them
  !! A string will have typeof = 'string'
  !! A string invoked with a constructor will have typeof = 'object'
  !! They will look the same, but === will retrurn false


## Inheritance

With inheritance, we can build a new class based on an existing class

super class => subclasses
`subclass extends superclass`
-> subclasses inherit everything
-> properties or methods of the super classes can be *overridden* if we want to change them
-> keyword `super` can help override the super inheritance while containing the super info too

## Getters/setters

Two main reasons for using them:
1. Validating data before assigning it to a property
2. Computing a value on the fly instead of simply pulling it out of a property
